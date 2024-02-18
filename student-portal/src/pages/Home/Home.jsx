import React from 'react';
import { useContext } from 'react';
import { StudentPortalDBContext } from '../../store/studentStore';
import StudentList from '../../components/studentList/StudentList';
import ErrorMessage  from "../../components/errorMessage/errorMessage"

const Home=()=>{
  const {studentList} = useContext(StudentPortalDBContext);

  return (
    <>
      { studentList.length=== 0 ? <ErrorMessage></ErrorMessage>: 
        <StudentList students={studentList}></StudentList> 
      }
    </>
  )
}
export default Home;