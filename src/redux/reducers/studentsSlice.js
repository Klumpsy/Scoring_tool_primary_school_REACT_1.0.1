import { createSlice} from "@reduxjs/toolkit";





const initialState = { 
    students: [],
    selectedCategory: "none"
}

const studentSlice = createSlice({ 
    name: "students", 
    initialState, 
    reducers: { 
        saveStudentList(state, action) { 
            state.students = action.payload
        },
        filterStudents(state, action) { 
            state.selectedCategory = action.payload
        }
    }
})

export const {saveStudentList, filterStudents} = studentSlice.actions;

export const checkStudents = state => state.students.students; 
export const selectedCategory = state => state.students.selectedCategory; 

export default studentSlice.reducer; 