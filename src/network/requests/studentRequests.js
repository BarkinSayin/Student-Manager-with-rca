import { baseService } from "../services/baseService";

export const getStudents = async () => {
  try {
    const response = await baseService.get("/students");
    if (response.status !== 200) {
      throw new Error("Can not get list");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postStudent = async (newStudent) => {
  try {
    const response = await baseService.post("/students", newStudent);
    if (response.status !== 201) {
      throw new Error("Can not post new student");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const deleteStudent = async (studentId) => {
  try {
    const response = await baseService.delete(`/students/${studentId}`);
    if (response.status !== 200) {
      throw new Error("Can not delete student");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
