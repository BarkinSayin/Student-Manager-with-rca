import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { StudentContext } from "../../../../context/student/StundetContext";

const StudentTableRow = ({ student }) => {
  const { deleteStudent, isLoading } = useContext(StudentContext);
  const handleDelete = () => {
    try {
      deleteStudent(student.id);
    } catch (error) {
      console.log("StudentCard ", error);
    }
  };
  return (
    <tr key={student.id} className="student-row">
      <td className="student-info">{student.studentName}</td>
      <td className="student-info">{student.course}</td>
      <td className="student-info">{student.instructor}</td>
      <td>
        {isLoading ? (
          <button className="delete-button" disabled>
            <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
          </button>
        ) : (
          <button className="delete-button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
          </button>
        )}
      </td>
    </tr>
  );
};

export default StudentTableRow;
