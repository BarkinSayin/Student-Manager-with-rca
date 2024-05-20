import "./App.css";
import { useState } from "react";
import Header from "./components/shared/Header.jsx";
import StudentListTable from "./components/app/student/student-list-table/StudentListTable.jsx";
import StudentForm from "./components/app/student/student-form/StudentForm.jsx";

function App() {
  const [studentList, setStudentList] = useState([
    {
      studentName: "Barkın Onay Sayın",
      course: "React",
      instructor: "Hicran Ertuğral",
      id: "001",
    },
    {
      studentName: "Onur Ege Erkallbek",
      course: "JavaScript",
      instructor: "Buse Uğraş",
      id: "002",
    },
    {
      studentName: "Flex Berkay Turna",
      course: "Html Css",
      instructor: "Orkun Durmaz",
      id: "003",
    },
    {
      studentName: "Ceren Dinçer",
      course: "React",
      instructor: "Orkun Durmaz",
      id: "004",
    },
  ]);

  const addStudent = (newStudent) => {
    setStudentList((prevStudentList) => [
      ...prevStudentList,
      { ...newStudent, id: Date.now().toString() },
    ]);
  };

  //Delete buttonu için fonksiyon
  //Tıklanan delete buttonu ilgili student card'ın id'sini son güncel student listde ki her elemanın id'si ile karşılaştırıp eşit olduğu takdirde arrayden silmesine yarıyor.
  const deleteStudent = (id) => {
    setStudentList((prevStudentList) =>
      prevStudentList.filter((student) => student.id !== id)
    );
  };

  //Sadece baş harfleri büyük yazdırma fonksiyonu
  // function capitalizeFirstLetter(input) {
  //   return input.toLowerCase().replace(/(^\w|\s\w)/g, function (letter) {
  //     return letter.toUpperCase();
  //   });
  // }

  return (
    <div className="App">
      <Header
        title={"Student Manager"}
        navElements={["Home", "About", "Contact"]}
      />
      <main className="main-content">
        <StudentForm addStudent={addStudent} />
        <StudentListTable
          studentList={studentList}
          deleteStudent={deleteStudent}
        />
      </main>
    </div>
  );
}

export default App;
