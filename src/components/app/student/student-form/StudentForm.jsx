import { useContext, useState } from "react";
import { StudentContext } from "../../../../context/student/StundetContext";

const StudentForm = () => {
  const [studentInput, setStudentInput] = useState({
    studentName: "",
    course: "",
    instructor: "",
  });

  const [error, setError] = useState({
    nameError: false,
    courseError: false,
    instructorError: false,
  });

  const { addStudent } = useContext(StudentContext);

  const createStudent = (event) => {
    event.preventDefault();
    //Errorları sıfırlama
    setError({
      nameError: false,
      courseError: false,
      instructorError: false,
    });
    if (
      studentInput.studentName.trim() &&
      studentInput.course.trim() &&
      studentInput.instructor.trim()
    ) {
      addStudent(studentInput);
      //Input içeriğini temizleme
      setStudentInput({ studentName: "", course: "", instructor: "" });
    } else {
      !studentInput.studentName.trim() &&
        setError((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          studentName: true,
        }));
      !studentInput.course.trim() &&
        setError((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          course: true,
        }));
      !studentInput.instructor.trim() &&
        setError((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          instructor: true,
        }));
    }
  };

  return (
    <form className="student-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Student Name"
          //İki yönlü bağlama (Two Way Binding)
          value={studentInput.studentName}
          onChange={(event) => {
            setStudentInput((prevStudentInput) => ({
              ...prevStudentInput,
              studentName: event.target.value,
            }));
          }}
        />
        {
          //Conditional Rendering
        }
        {error.nameError && (
          <p className="error-text">Please enter a valid Student name</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Course"
          //İki yönlü bağlama (Two Way Binding)
          value={studentInput.course}
          onChange={(event) => {
            setStudentInput((prevStudentInput) => ({
              ...prevStudentInput,
              course: event.target.value,
            }));
          }}
        />
        {
          //Conditional Rendering
        }
        {error.courseError && (
          <p className="error-text">Please enter a valid Course</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Instructor"
          //İki yönlü bağlama (Two Way Binding)
          value={studentInput.instructor}
          onChange={(event) => {
            setStudentInput((prevStudentInput) => ({
              ...prevStudentInput,
              instructor: event.target.value,
            }));
          }}
        />
        {
          //Conditional Rendering
        }
        {error.instructorError && (
          <p className="error-text">Please enter a valid Instructor</p>
        )}
      </div>
      <button className="submit-button" onClick={createStudent}>
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
