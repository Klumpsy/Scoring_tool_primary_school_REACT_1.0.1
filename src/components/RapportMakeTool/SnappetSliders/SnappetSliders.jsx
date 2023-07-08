import React from 'react'
import "./snappetSliders.css"

//Components
import Slider from './Slider/Slider';

import {
    rekenenSlider,
    taalSlider,
    spellingSlider,
    rekenenSlider2,
    taalSlider2,
    spellingSlider2,

} from "../../../redux/reducers/studentsSlice";

function SnappetSliders({ activeStudent }) {

    return (
        <div className="slider-container-wrapper">
            <div className="slider-container-rapporten">
                <div className="slidercontainer">
                    <Slider
                        title="Rekenen"
                        lastValue={activeStudent?.sliderDisplay[0]}
                        sliderDispatch={rekenenSlider}
                    />
                    <Slider
                        title="Taal"
                        lastValue={activeStudent?.sliderDisplay[2]}
                        sliderDispatch={taalSlider}
                    />
                    <Slider
                        title="Spelling"
                        lastValue={activeStudent?.sliderDisplay[4]}
                        sliderDispatch={spellingSlider}
                    />
                </div>
            </div>
            <div className="slider-container-rapporten">
                <div className="slidercontainer">
                    <Slider
                        title="Rekenen 2"
                        lastValue={activeStudent?.sliderDisplay[1]}
                        sliderDispatch={rekenenSlider2}
                    />
                    <Slider
                        title="Taal 2"
                        lastValue={activeStudent?.sliderDisplay[3]}
                        sliderDispatch={taalSlider2}
                    />
                    <Slider
                        title="Spelling 2"
                        lastValue={activeStudent?.sliderDisplay[5]}
                        sliderDispatch={spellingSlider2}
                    />
                </div>
            </div>
        </div>
    )
}

export default SnappetSliders