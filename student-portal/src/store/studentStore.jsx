import { useReducer } from "react";
import { createContext } from "react";

export const StudentPortalDBContext = createContext({
    studentDb: [],
    addNewStudent: () => {},
    deleteStudent: () => {},
});

const StudentDbReducer = (studentCurrentDb, action)=>{
    let newStudents = studentCurrentDb;
    if(action.type === "NEW_STUDENT"){
        newStudents =[
            ...studentCurrentDb,
            {
                name: action.payload.name,
                father: action.payload.father,
                email: action.payload.email,
                passwrod: action.payload.passwrod,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode
            
            },
        ];
    }else if(action.type==="DELETE_STUDENT"){
        newStudents = studentCurrentDb.filter(
            (student)=> student.email !==action.payload.email
        );
    }
    return newStudents;
};
const StudentPortalContextProvider = ({children}) => {
    const [studentDb,dispatchStudents] = useReducer(StudentDbReducer,[]);

    const addNewStudent = (name, father, email, passwrod, address, city, state, zipcode) => {
        const newStudentAction = {
            type : "NEW_STUDENT",
            payload:{
                name,
                father,
                email,
                passwrod,
                address,
                city,
                state,
                zipcode
            },
        };
        dispatchStudents(newStudentAction);
    };
    const deleteStudent = (name) => {
        const deleteItemAction = {
          type: "DELETE_ITEM",
          payload: {
            name: name,
          },
        };
        dispatchStudents(deleteItemAction);
      };

      return (
        <StudentPortalDBContext.Provider
          value={{
            studentDb,
            addNewStudent,
            deleteStudent,
          }}
        >
          {children}
        </StudentPortalDBContext.Provider>
      );
    };
export default StudentPortalContextProvider;