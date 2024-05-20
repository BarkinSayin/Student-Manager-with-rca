import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/shared/Header.jsx";
import StudentTableRow from "./components/app/student/student-table-row/StudentTableRow.jsx";
import StudentListTable from "./components/app/student/student-list-table/StudentListTable.jsx";

function App() {
  const [studentList, setStudentList] = useState([
    {
      student: "Barkın Onay Sayın",
      course: "React",
      instructor: "Hicran Ertuğral",
      id: "001",
    },
    {
      student: "Onur Ege Erkallbek",
      course: "JavaScript",
      instructor: "Buse Uğraş",
      id: "002",
    },
    {
      student: "Flex Berkay Turna",
      course: "Html Css",
      instructor: "Orkun Durmaz",
      id: "003",
    },
    {
      student: "Ceren Dinçer",
      course: "React",
      instructor: "Orkun Durmaz",
      id: "004",
    },
  ]);

  const [studentInput, setStudentInput] = useState({
    student: "",
    course: "",
    instructor: "",
  });

  const [error, setError] = useState({
    nameError: false,
    courseError: false,
    instructorError: false,
  });
  //Delete buttonu için fonksiyon
  //Tıklanan delete buttonu ilgili student card'ın id'sini son güncel student listde ki her elemanın id'si ile karşılaştırıp eşit olduğu takdirde arrayden silmesine yarıyor.
  const deleteStudent = (id) => {
    setStudentList((prevStudentList) =>
      prevStudentList.filter((student) => student.id !== id)
    );
  };

  //Sadece baş harfleri büyük yazdırma fonksiyonu
  function capitalizeFirstLetter(input) {
    return input.toLowerCase().replace(/(^\w|\s\w)/g, function (letter) {
      return letter.toUpperCase();
    });
  }

  const buttonEvent = (event) => {
    event.preventDefault();
    //Errorları sıfırlama
    setError({
      nameError: false,
      courseError: false,
      instructorError: false,
    });

    if (
      !studentInput.student.trim() ||
      !studentInput.course.trim() ||
      !studentInput.instructor.trim()
    ) {
      //Koşul sağlanıyorsa ve Error varsa yazdırma
      setError({
        nameError: !studentInput.student.trim(),
        courseError: !studentInput.course.trim(),
        instructorError: !studentInput.instructor.trim(),
      });
    } else {
      //StudentList state'i guncelle
      setStudentList((prevStudentList) => [
        ...prevStudentList,
        {
          student: capitalizeFirstLetter(studentInput.student),
          course: capitalizeFirstLetter(studentInput.course),
          instructor: capitalizeFirstLetter(studentInput.instructor),
          id: Math.random().toString(),
        },
      ]);

      //Input içeriğini temizleme
      setStudentInput({ student: "", course: "", instructor: "" });
    }
  };

  return (
    <div className="App">
      {
        //Header bileşenini App bileşenine eklemek
      }
      <Header
        title={"Student Manager"}
        navElements={["Home", "About", "Contact"]}
      />
      <main className="main-content">
        <form className="student-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Student Name"
              //İki yönlü bağlama (Two Way Binding)
              value={studentInput.student}
              onChange={(event) => {
                setStudentInput({
                  ...studentInput,
                  student: event.target.value,
                });
              }}
            />
            {
              //Conditional Rendering
            }
            {error.nameError && (
              <p className="error-text">Please enter a valid Student name</p>
            )}
          </div>
          <br />
          <div className="input-container">
            <input
              type="text"
              placeholder="Course"
              //İki yönlü bağlama (Two Way Binding)
              value={studentInput.course}
              onChange={(event) => {
                setStudentInput({
                  ...studentInput,
                  course: event.target.value,
                });
              }}
            />
            {
              //Conditional Rendering
            }
            {error.courseError && (
              <p className="error-text">Please enter a valid Course</p>
            )}
          </div>
          <br />
          <div className="input-container">
            <input
              type="text"
              placeholder="Instructor"
              //İki yönlü bağlama (Two Way Binding)
              value={studentInput.instructor}
              onChange={(event) => {
                setStudentInput({
                  ...studentInput,
                  instructor: event.target.value,
                });
              }}
            />
            {
              //Conditional Rendering
            }
            {error.instructorError && (
              <p className="error-text">Please enter a valid Instructor</p>
            )}
          </div>
          <br />
          <button className="submit-button" onClick={buttonEvent}>
            Submit
          </button>
        </form>
        <StudentListTable
          studentList={studentList}
          deleteStudent={deleteStudent}
        />
      </main>
    </div>
  );
}

export default App;
