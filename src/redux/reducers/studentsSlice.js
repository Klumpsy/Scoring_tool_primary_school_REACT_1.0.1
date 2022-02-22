import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk('students/getStudents', async (data) => { 
    return data
})

const initialState = { 
    students: [],
    selectedStudent: null,
    status: null,
    selectedCategory: "none"
}

const studentSlice = createSlice({ 
    name: "students", 
    initialState, 
    reducers: { 
        filterStudents(state, action) { 
            state.selectedCategory = action.payload
        },
        selectStudent(state, action) { 
            state.selectedStudent = action.payload
        }
    },
    extraReducers: { 
        [fetchStudents.pending]: (state) => { 
            state.status = "pending"
        },
        [fetchStudents.fulfilled]: (state, payload) => { 
            state.students = payload
            state.status = "fulfilled"
        },
        [fetchStudents.rejected]: (state) => { 
            state.status = "failed"
        }
    }
})

export const {filterStudents, selectStudent} = studentSlice.actions;

export const checkStudents = state => state.students.students.payload; 
export const selectedCategory = state => state.students.selectedCategory; 
export const selectedStudent = state => state.students.selectedStudent; 

export default studentSlice.reducer; 