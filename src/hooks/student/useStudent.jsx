import { useState } from "react";
import axios from "axios";
const useStudent = () => {
  const [studentList, setStudentList] = useState([]);

  //Delete buttonu için fonksiyon
  //Tıklanan delete buttonu ilgili student card'ın id'sini son güncel student listde ki her elemanın id'si ile karşılaştırıp eşit olduğu takdirde arrayden silmesine yarıyor.
  const deleteStudent = async (studentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/students/${studentId}`
      );

      setStudentList((prevStudentList) =>
        prevStudentList.filter((student) => student.id !== studentId)
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const addStudent = async (student) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/students",
        student
      );
      setStudentList((prevStudentList) => [...prevStudentList, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getStudents = async () => {
    try {
      const response = await axios("http://localhost:5050/students");
      setStudentList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { studentList, deleteStudent, addStudent, getStudents };
};

export default useStudent;
