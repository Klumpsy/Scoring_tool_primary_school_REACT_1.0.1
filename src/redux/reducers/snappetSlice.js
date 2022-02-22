import { createSlice} from "@reduxjs/toolkit";

const initialState = { 
    snappetSliderRekenen: 50,
    snappetSliderTaal: 50,
    snappetSliderSpelling: 50,
}

const snappetSliderSlice = createSlice({ 
    name: "snappetSliders", 
    initialState, 
    reducers: { 
        rekenenSlider(state, action) { 
            state.snappetSliderRekenen = action.payload
        },
        taalSlider(state, action) { 
            state.snappetSliderTaal = action.payload
        },
        spellingSlider(state, action) { 
            state.snappetSliderSpelling = action.payload
        }
    }
})

export const {rekenenSlider, taalSlider, spellingSlider} = snappetSliderSlice.actions;
export const rekenenSliderValue = state => state.sliders.snappetSliderRekenen;
export const taalSliderValue = state => state.sliders.snappetSliderTaal;
export const spellingSliderValue = state => state.sliders.snappetSliderSpelling;

export default snappetSliderSlice.reducer; 