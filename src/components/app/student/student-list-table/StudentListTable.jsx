import React, { useContext } from "react";
import StudentTableRow from "../student-table-row/StudentTableRow";
import { StudentContext } from "../../../../context/student/StundetContext";

const StudentListTable = () => {
  const { studentList } = useContext(StudentContext);
  return (
    <table className="student-list-table">
      <thead>
        <tr className="table-head">
          <th className="student-head">Student Name</th>
          <th className="student-head">Course</th>
          <th className="student-head">Instructor</th>
        </tr>
      </thead>
      <tbody>
        {studentList.map((student) => (
          <StudentTableRow student={student} key={student.id} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentListTable;
