import { createSlice} from "@reduxjs/toolkit";

const initialState = { 
    students: []
}

const studentSlice = createSlice({ 
    name: "studentList", 
    initialState, 
    reducers: { 
        saveStudentList(state, action) { 
            state.students = action.payload
        }
    }
})

export const {saveStudentList} = studentSlice.actions;

export const checkStudents = state => state.students.students; 

export default studentSlice.reducer; 