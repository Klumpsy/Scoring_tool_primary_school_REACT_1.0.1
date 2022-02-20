import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
    loggedTeacher: "None",
    logged: false
}

const loggedTeacherSlice = createSlice({ 
    name: "loggedTeacher", 
    initialState, 
    recuders: { 
        logTeacher(state, action) { 
            state.loggedTeacher = action.payload.username
            state.logged = true; 
        },
        logoutTeacher(state) { 
            state.loggedTeacher = "None"
            state.logged = false
        }
    }
})

export const {logTeacher, logoutTeacher} = loggedTeacherSlice.actions;
export default loggedTeacherSlice.reducer; 

export const loggedTeacher = state => state.loggedTeacherSlice

