import { configureStore } from "@reduxjs/toolkit"; 
import loggedTeacherSlice from "../reducers/loggedTeacherSlice"
import studentsSlice from "../reducers/studentsSlice";
import snappetSliderSlice from "../reducers/snappetSlice";

const store = configureStore({ 
    reducer: { 
        user: loggedTeacherSlice, 
        students: studentsSlice,
        sliders: snappetSliderSlice
    }
})

export default store; 

