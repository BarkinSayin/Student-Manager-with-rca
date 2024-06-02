import React, { useEffect } from "react";
import StudentForm from "../../../../components/app/student/student-form/StudentForm";

const NewStudentPage = () => {
  useEffect(()=>{
    console.log("NewStudentPage mounted");
    return ()=>{console.log("NewStudentPage unmounted")}
  },[])
  return <StudentForm />;
};

export default NewStudentPage;
