import { combineReducers } from "@reduxjs/toolkit";

//Slices 
import loggedTeacherSlice from "./loggedTeacherSlice";
import studentsSlice from "./studentsSlice";

const rootReducer = combineReducers({
    user: loggedTeacherSlice, 
    students: studentsSlice
})

export default rootReducer; 