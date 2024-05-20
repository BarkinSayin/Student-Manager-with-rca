import React from "react";
import StudentTableRow from "../student-table-row/StudentTableRow";

const StudentListTable = ({ studentList, deleteStudent }) => {
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
          <StudentTableRow
            student={student}
            key={student.id}
            deleteStudent={deleteStudent}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StudentListTable;
