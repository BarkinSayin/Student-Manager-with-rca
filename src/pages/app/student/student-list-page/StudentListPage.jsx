import React, { useEffect } from "react";
import StudentListTable from "../../../../components/app/student/student-list-table/StudentListTable";

const StudentListPage = () => {
  useEffect(()=>{
    console.log("StudentListPage mounted");
    return ()=>{console.log("StudentListPage unmounted")}
  },[])
  return <StudentListTable />;
};

export default StudentListPage;
