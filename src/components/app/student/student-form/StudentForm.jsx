import { createRef, useContext, useReducer, useState } from "react";
import { StudentContext } from "../../../../context/student/StundetContext";

const initialState = {
  studentInput: {
    studentName: "",
    course: "",
    instructor: "",
  },
  error: {
    nameError: false,
    courseError: false,
    instructorError: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "STUDENT_INPUT":
      return {
        studentInput: action.payload.inputs,
        error: { nameError: false, courseError: false, instructorError: false },
      };
    case "ERROR":
      return {
        studentInput: { ...state.studentInput },
        error: action.payload.errors,
      };
    case "RESET":
      return {
        studentInput: {
          studentName: "",
          course: "",
          instructor: "",
        },
        error: {
          nameError: false,
          courseError: false,
          instructorError: false,
        },
      };

    default:
      return state;
  }
};

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

  const [state, dispatch] = useReducer(reducer, initialState);

  const nameRef = createRef();
  const courseRef = createRef();
  const instructorRef = createRef();

  const { addStudent, isLoading } = useContext(StudentContext);

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
          nameError: true,
        }));
      !studentInput.course.trim() &&
        setError((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          courseError: true,
        }));
      !studentInput.instructor.trim() &&
        setError((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          instructorError: true,
        }));
    }
  };

  const handleInputName = () => {};

  return (
    <form className="student-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Student Name"
          //İki yönlü bağlama (Two Way Binding)
          value={studentInput.studentName}
          onChange={handleInputName}
          ref={nameRef}
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
          ref={courseRef}
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
          ref={instructorRef}
        />
        {
          //Conditional Rendering
        }
        {error.instructorError && (
          <p className="error-text">Please enter a valid Instructor</p>
        )}
      </div>
      {isLoading ? (
        <button className="submit-button" disabled>
          Submit
        </button>
      ) : (
        <button className="submit-button" onClick={createStudent}>
          Submit
        </button>
      )}
    </form>
  );
};

export default StudentForm;
