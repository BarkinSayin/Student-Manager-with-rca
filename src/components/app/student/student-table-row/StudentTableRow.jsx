import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StudentTableRow = ({ student, deleteStudent }) => {
  return (
    <tr key={student.id} className="student-row">
      <td className="student-info">{student.studentName}</td>
      <td className="student-info">{student.course}</td>
      <td className="student-info">{student.instructor}</td>
      <td>
        <button
          className="delete-button"
          onClick={() => {
            deleteStudent(student.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
        </button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
