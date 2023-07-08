import { createSlice} from "@reduxjs/toolkit";

const initialState = { 
    modalActive: false
}

const rapportModalSlice = createSlice({ 
    name: "modal", 
    initialState, 
    reducers: { 
        setModalActive(state) { 
            state.modalActive = true; 
        },
        setModalClose(state) { 
            state.modalActive = false; 
        }
    }
})

export const {setModalActive, setModalClose} = rapportModalSlice.actions;
export const modalState = state => state.modal.modalActive

export default rapportModalSlice.reducer; 