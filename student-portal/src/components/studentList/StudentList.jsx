import Student from "../student/student";
const StudentList = ({students})=>{

    return (<>
    {
        students.map((st)=>(
            <Student
            name={st.name}
            father={st.father}
            email={st.email}
            password={st.password}
            address={st.address}
            city={st.city}
            state={st.state}
            zipcode={st.zipCode}
            ></Student>
            ))}
    </>);
}
export default StudentList;