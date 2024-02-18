import Student from "../student/student";
const StudentList = ({students})=>{

    return (<>
    {
        students.map((st)=>(
            <Student
            name={st.name}
            father={st.father}
            email={st.email}
            city={st.city}
            state={st.state}
            zipcode={st.zipcode}
            ></Student>
            ))}
    </>);
}
export default StudentList;