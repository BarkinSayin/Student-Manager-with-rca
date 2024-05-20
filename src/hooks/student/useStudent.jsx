import { useState } from "react";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);

  //Delete buttonu için fonksiyon
  //Tıklanan delete buttonu ilgili student card'ın id'sini son güncel student listde ki her elemanın id'si ile karşılaştırıp eşit olduğu takdirde arrayden silmesine yarıyor.
  const deleteStudent = (id) => {
    setStudentList((prevStudentList) =>
      prevStudentList.filter((student) => student.id !== id)
    );
  };

  const addStudent = (newStudent) => {
    setStudentList((prevStudentList) => [
      ...prevStudentList,
      { ...newStudent, id: Date.now().toString() },
    ]);
  };

  const getStudent = () => {
    try {
      const response = fetch("http://localhost:5050/students");
      setStudentList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { studentList, deleteStudent, addStudent, getStudent };
};

export default useStudent;
