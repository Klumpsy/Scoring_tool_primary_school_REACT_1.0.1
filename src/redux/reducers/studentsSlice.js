import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

//Firebase
import { ref, remove, update} from "firebase/database";
import { database} from "../../firebaseFunctions/firebase";

export const fetchStudents = createAsyncThunk('students/getStudents', async (data) => { 
    return data
})

export const deleteStudent = createAsyncThunk('students/deleteStudent', async (studentName) => { 
    let deleteCheck = window.confirm("Weet je zeker dat je deze leerling wilt verwijderen?")
    if (deleteCheck == true) { 
        try{ 
            await remove(ref(database, `/Rapporten/${studentName}`))
            .then(alert(`Leerling: ${studentName} is verwijderd!`))
        } catch(err) { 
            alert(`Leerling niet verwijderd: ${err.message}`)
        }
    }
})

// export const updateStudent = createAsyncThunk('students/updateStudent', async (student) => { 
//     let deleteCheck = window.confirm("Weet je zeker dat je zeker dat je deze leerling wilt updaten?")
//     if (deleteCheck == true) { 
//         try{ 
//             await update(ref(database, `/Rapporten/${student.studentName}`, {

//             }))
//             .then(alert(` ${studentName} is geupdate!`))
//         } catch(err) { 
//             alert(`Leerling niet geupdate: ${err.message}`)
//         }
//     }
// })

const initialState = { 
    students: [],
    selectedStudent: null,
    studentDeleted: null,
    searchedStudent: "",
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
        searchStudent(state, action) { 
            state.searchedStudent = action.payload
        },
        selectStudent(state, action) { 
            state.selectedStudent = action.payload
        },
        updateProjects(state, action) { 
            if (state.selectedStudent[action.payload.type]) {
                if(action.payload.action === "new") { 
                    state.selectedStudent[action.payload.type] = [...state.selectedStudent[action.payload.type], "nieuw veld"];
                } 
                if (action.payload.action === "update") {
                    state.selectedStudent[action.payload.type][action.payload.index] = [...state.selectedStudent[action.payload.type]][action.payload.index] = action.payload.item
                }
            } else { 
                state.selectedStudent[action.payload.type] = ["Nieuwe Veld"];
            }
        },
        removeProject(state, action) { 
            state.selectedStudent[action.payload.type] = [...state.selectedStudent[action.payload.type]].filter(function(value, index, arr) { 
                return index != action.payload.index;
            })
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
        },
        [deleteStudent.pending]: (state) => { 
            state.studentDeleted = "pending"; 
        },
        [deleteStudent.fulfilled]: (state) => { 
            state.studentDeleted = "Succesful verwijderd"; 
        },
        [deleteStudent.rejected]: (state) => { 
            state.studentDeleted = "failed"; 
        }
    }
})

export const {
    filterStudents, 
    selectStudent, 
    searchStudent,
    updateProjects,
    removeProject
} = studentSlice.actions;

export const checkStudents = state => state.students.students.payload; 
export const selectedCategory = state => state.students.selectedCategory; 
export const selectedStudent = state => state.students.selectedStudent; 
export const searchedStudent = state => state.students.searchedStudent; 

export default studentSlice.reducer; 