import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

//Firebase
import { ref, set} from "firebase/database";
import { database} from "../../firebaseFunctions/firebase";

export const updateStudent = createAsyncThunk('students/updateStudent', async (student) => { 
    let deleteCheck = window.confirm("Weet je zeker dat je zeker dat je deze leerling wilt updaten?")
    if (deleteCheck == true) { 
        try{ 
            await set(ref(database, `/Rapporten/${student?.studentName}`), {
                ...student
            })
            .then(alert(` ${student?.studentName} is geupdate!`))
        } catch(err) { 
            alert(`Leerling niet geupdate: ${err.message}`)
        }
    }
})

const initialState = { 
    status: "none"
}

const updateStudentSlice = createSlice({ 
    name: "Updatestudents", 
    initialState, 
    extraReducers: { 
        [updateStudent.pending]: (state) => { 
            state.status = "pending"
        },
        [updateStudent.fulfilled]: (state, payload) => { 
            state.status = "fulfilled"
        },
        [updateStudent.rejected]: (state) => { 
            state.status = "failed"
        }
    }
})

export default updateStudentSlice.reducer;