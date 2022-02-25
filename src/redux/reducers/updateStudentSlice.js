import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

//Firebase
import { ref, remove, update} from "firebase/database";
import { database} from "../../firebaseFunctions/firebase";

export const updateStudent = createAsyncThunk('students/updateStudent', async (student) => { 
    let deleteCheck = window.confirm("Weet je zeker dat je zeker dat je deze leerling wilt updaten?")
    if (deleteCheck == true) { 
        try{ 
            await update(ref(database, `/Rapporten/${student.studentName}`, {

            }))
            .then(alert(` ${studentName} is geupdate!`))
        } catch(err) { 
            alert(`Leerling niet geupdate: ${err.message}`)
        }
    }
})

const initialState = { 
    updateLeerling: leerling
}

const updateStudentSlice = createSlice({ 
    name: "Updatestudents", 
    initialState, 
    reducers: { 
        filterStudents(state, action) { 
            state.selectedCategory = action.payload
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