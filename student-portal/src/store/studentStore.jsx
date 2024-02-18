import { useReducer } from "react";
import { createContext } from "react";

export const StudentPortalDBContext = createContext({
    studentList: [],
    addNewStudent: () => {},
    deleteStudent: () => {},
});

const StudentDbReducer = (studentCurrentDb, action)=>{
    let newStudentDb = studentCurrentDb;

    if(action.type === "NEW_STUDENT"){
      newStudentDb =[
            ...studentCurrentDb,
            {
                name: action.payload.name,
                father: action.payload.father,
                email: action.payload.email,
                passwrod: action.payload.passwrod,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode,
                image: action.payload.image
            },
        ];
    }else if(action.type==="DELETE_STUDENT"){
        newStudentDb = studentCurrentDb.filter(
            (student) => student.email !==action.payload.email
        );
    }
    return newStudentDb;
};

const StudentPortalContextProvider = ({children}) => {

    const [studentList,dispatchStudents] = useReducer(StudentDbReducer,[]);

    const addNewStudent = (name, father, email, passwrod, address, city, state, zipcode) => {
        const newStudentAction = {
            type : "NEW_STUDENT",
            payload:{ name, father, email, passwrod, address, city, state, zipcode },
        };
        dispatchStudents(newStudentAction);
    };

    const deleteStudent = (email) => {
        const deleteStudentAction = {
          type: "DELETE_STUDENT",
          payload: {
            email: email,
          },
        };
        dispatchStudents(deleteStudentAction);
      };

      return (
        <StudentPortalDBContext.Provider
          value={{
            studentList,
            addNewStudent,
            deleteStudent,
          }}
        >
          {children}
        </StudentPortalDBContext.Provider>
      );
    };
export default StudentPortalContextProvider;