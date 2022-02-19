import { combineReducers } from "@reduxjs/toolkit";

//Slices 
import loggedTeacherSlice from "./loggedTeacherSlice";

const rootReducer = combineReducers({
    loggedTeacherSlice, 

})

export default rootReducer; 