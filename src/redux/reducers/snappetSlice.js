import { createSlice} from "@reduxjs/toolkit";

const initialState = { 
    snappetSliderRekenen: 0,
    snappetSliderTaal: 0,
    snappetSliderSpelling: 0,
    snappetSliderRekenen2: 0,
    snappetSliderTaal2: 0,
    snappetSliderSpelling2: 0,
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
        },
        rekenenSlider2(state, action) { 
            state.snappetSliderRekenen2 = action.payload
        },
        taalSlider2(state, action) { 
            state.snappetSliderTaal2 = action.payload
        },
        spellingSlider2(state, action) { 
            state.snappetSliderSpelling2 = action.payload
        }
    }
})

export const {
    rekenenSlider, 
    taalSlider, 
    spellingSlider,
    rekenenSlider2, 
    taalSlider2, 
    spellingSlider2
} = snappetSliderSlice.actions;

export const rekenenSliderValue = state => state.sliders.snappetSliderRekenen;
export const taalSliderValue = state => state.sliders.snappetSliderTaal;
export const spellingSliderValue = state => state.sliders.snappetSliderSpelling;
export const rekenenSliderValue2 = state => state.sliders.snappetSliderRekenen2;
export const taalSliderValue2 = state => state.sliders.snappetSliderTaal2;
export const spellingSliderValue2 = state => state.sliders.snappetSliderSpelling2;

export default snappetSliderSlice.reducer; 