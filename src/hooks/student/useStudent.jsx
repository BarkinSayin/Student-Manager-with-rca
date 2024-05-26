import { useState } from "react";
import axios from "axios";
import {
  postStudent,
  deleteStudent as deleteStudentAPI,
  getStudents as getStudentsAPI,
} from "../../network/requests/studentRequests";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Delete buttonu için fonksiyon
  //Tıklanan delete buttonu ilgili student card'ın id'sini son güncel student listde ki her elemanın id'si ile karşılaştırıp eşit olduğu takdirde arrayden silmesine yarıyor.
  const deleteStudent = async (studentId) => {
    try {
      setIsLoading(true);
      await deleteStudentAPI(studentId);
      setStudentList((prevStudentList) => {
        return prevStudentList.filter((student) => student.id !== studentId);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addStudent = async (student) => {
    try {
      setIsLoading(true);
      const newStudent = await postStudent(student);
      setStudentList((prevStudentList) => [...prevStudentList, newStudent]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudents = async () => {
    try {
      setIsLoading(true);
      const students = await getStudentsAPI();
      setStudentList(students);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { studentList, isLoading, deleteStudent, addStudent, getStudents };
};

export default useStudent;
