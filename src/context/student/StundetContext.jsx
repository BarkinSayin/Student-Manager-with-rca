import React, { createContext } from "react";
import useStudent from "../../hooks/student/useStudent";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { studentList, getStudent, addStudent, deleteStudent } = useStudent();
  const contextValue = { studentList, getStudent, addStudent, deleteStudent };
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};
