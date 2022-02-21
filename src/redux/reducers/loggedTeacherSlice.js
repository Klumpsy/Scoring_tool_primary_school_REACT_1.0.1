import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
    loggedTeacher: undefined,
    logged: false
}

const loggedTeacherSlice = createSlice({ 
    name: "loggedTeacher", 
    initialState, 
    reducers: { 
        logTeacher(state, action) { 
            state.loggedTeacher = action.payload
            state.logged = true; 
        },
        logoutTeacher(state) { 
            state.loggedTeacher = undefined
            state.logged = false
        }
    }
})

export const {logTeacher, logoutTeacher} = loggedTeacherSlice.actions;
export const loggedTeacher = state => state.user.logged
export const loggedTeacherName = state => state.user.loggedTeacher

export default loggedTeacherSlice.reducer; 



