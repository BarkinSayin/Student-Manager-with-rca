import { createRef, useContext, useReducer, useState } from "react";
import { StudentContext } from "../../../../context/student/StundetContext";

const initialState = {
  studentInput: {
    studentName: "",
    course: "",
    instructor: "",
  },
  errors: {
    nameError: false,
    courseError: false,
    instructorError: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STUDENT_INPUT":
      return {
        ...state,
        studentInput: { ...state.studentInput, ...action.payload.inputs },
      };
    case "ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload,
        },
      };
    case "RESET":
      return {
        studentInput: {
          studentName: "",
          course: "",
          instructor: "",
        },
        errors: {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const nameRef = createRef();
  const courseRef = createRef();
  const instructorRef = createRef();

  const { addStudent, isLoading } = useContext(StudentContext);

  const createStudent = (event) => {
    event.preventDefault();

    if (
      state.studentInput.studentName.trim() &&
      state.studentInput.course.trim() &&
      state.studentInput.instructor.trim()
    ) {
      addStudent(state.studentInput);
      handleReset();
    } else {
      handleErrors();
    }
  };

  const handleInputName = () => {
    dispatch({
      type: "SET_STUDENT_INPUT",
      payload: {
        inputs: {
          studentName: nameRef.current.value,
        },
      },
    });
  };

  const handleInputCourse = () => {
    dispatch({
      type: "SET_STUDENT_INPUT",
      payload: {
        inputs: {
          course: courseRef.current.value,
        },
      },
    });
  };

  const handleInputInstructor = () => {
    dispatch({
      type: "SET_STUDENT_INPUT",
      payload: {
        inputs: {
          instructor: instructorRef.current.value,
        },
      },
    });
  };

  const handleErrors = () => {
    !state.studentInput.studentName.trim()
      ? dispatch({
          type: "ERROR",
          payload: { nameError: true },
        })
      : dispatch({
          type: "ERROR",
          payload: { nameError: false },
        });
    !state.studentInput.course.trim()
      ? dispatch({
          type: "ERROR",
          payload: { courseError: true },
        })
      : dispatch({
          type: "ERROR",
          payload: { courseError: false },
        });
    !state.studentInput.instructor.trim()
      ? dispatch({
          type: "ERROR",
          payload: { instructorError: true },
        })
      : dispatch({
          type: "ERROR",
          payload: { instructorError: false },
        });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });

    nameRef.current.value = null;
    courseRef.current.value = null;
    instructorRef.current.value = null;
  };

  return (
    <form className="student-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Student Name"
          onChange={handleInputName}
          ref={nameRef}
        />
        {
          //Conditional Rendering
        }
        {state.errors.nameError && (
          <p className="error-text">Please enter a valid Student name</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Course"
          onChange={handleInputCourse}
          ref={courseRef}
        />
        {
          //Conditional Rendering
        }
        {state.errors.courseError && (
          <p className="error-text">Please enter a valid Course</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Instructor"
          onChange={handleInputInstructor}
          ref={instructorRef}
        />
        {
          //Conditional Rendering
        }
        {state.errors.instructorError && (
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
