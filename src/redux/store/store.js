import { configureStore } from "@reduxjs/toolkit"; 
import loggedTeacherSlice from "../reducers/loggedTeacherSlice"
import studentsSlice from "../reducers/studentsSlice";

const store = configureStore({ 
    reducer: { 
        user: loggedTeacherSlice, 
        students: studentsSlice
    }
})

export default store; 

