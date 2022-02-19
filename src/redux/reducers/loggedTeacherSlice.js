import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    loggedTeacher: "None"
}

const loggedTeacherSlice = createSlice({ 
    name: "loggedTeacher", 
    initialState, 
    recuders: { 
        logTeacher(state, action) { 
            state.loggedTeacher = action.payload.teacherName
        },
        logoutTeacher(state) { 
            state.loggedTeacher = "None"
        }
    }
})

export const {logTeacher, logoutTeacher} = loggedTeacherSlice.actions;
export default loggedTeacherSlice.reducer; 

export const loggedTeacher = state => state.loggedTeacher; 

