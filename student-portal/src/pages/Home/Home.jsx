import React from 'react';
import { useContext } from 'react';
import { StudentPortalDBContext } from '../../store/studentStore';
import StudentList from '../../components/studentList/StudentList';
import ErrorMessage from '../../components/errorMessage/errorMessage';

const Home=()=>{
 
  const {studentDb} = useContext(StudentPortalDBContext);
  return (
    <>
       {studentDb.length=== 0 && <StudentList students={studentDb}></StudentList>}
    </>
  )
}
export default Home;