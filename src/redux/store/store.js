import { configureStore } from "@reduxjs/toolkit"; 
import loggedTeacherSlice from "../reducers/loggedTeacherSlice"
import studentsSlice from "../reducers/studentsSlice";
import updateStudentSlice from "../reducers/updateStudentSlice";

const store = configureStore({ 
    reducer: { 
        user: loggedTeacherSlice, 
        students: studentsSlice,
        updateStudents: updateStudentSlice
    }
})

export default store; 

