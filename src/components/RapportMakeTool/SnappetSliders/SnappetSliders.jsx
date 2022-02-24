import React, { useEffect } from 'react'
import "./snappetSliders.css"

//Components
import Slider from './Slider/Slider';

//Redux
import { useSelector } from "react-redux";
import {
    rekenenSlider,
    taalSlider,
    spellingSlider,
    rekenenSliderValue,
    taalSliderValue,
    spellingSliderValue,
    rekenenSlider2,
    taalSlider2,
    spellingSlider2,
    rekenenSliderValue2,
    taalSliderValue2,
    spellingSliderValue2
} from "../../../redux/reducers/snappetSlice";

function SnappetSliders({ activeStudent }) {
    const rekenenValue = useSelector(rekenenSliderValue);
    const taalValue = useSelector(taalSliderValue);
    const spellingValue = useSelector(spellingSliderValue);
    const rekenenValue2 = useSelector(rekenenSliderValue2);
    const taalValue2 = useSelector(taalSliderValue2);
    const spellingValue2 = useSelector(spellingSliderValue2);

    return (
        <div className="slider-container-wrapper">
            <div className="slider-container-rapporten">
                <div className="slidercontainer">
                    <Slider
                        title="Rekenen"
                        lastValue={activeStudent?.sliderDisplay[0]}
                        newValue={rekenenValue}
                        sliderDispatch={rekenenSlider}
                    />
                    <Slider
                        title="Taal"
                        lastValue={activeStudent?.sliderDisplay[2]}
                        newValue={taalValue}
                        sliderDispatch={taalSlider}
                    />
                    <Slider
                        title="Spelling"
                        lastValue={activeStudent?.sliderDisplay[4]}
                        newValue={spellingValue}
                        sliderDispatch={spellingSlider}
                    />
                </div>
            </div>
            <div className="slider-container-rapporten">
                <div className="slidercontainer">
                    <Slider
                        title="Rekenen 2"
                        lastValue={activeStudent?.sliderDisplay[1]}
                        newValue={rekenenValue2}
                        sliderDispatch={rekenenSlider2}
                    />
                    <Slider
                        title="Taal 2"
                        lastValue={activeStudent?.sliderDisplay[3]}
                        newValue={taalValue2}
                        sliderDispatch={taalSlider2}
                    />
                    <Slider
                        title="Spelling 2"
                        lastValue={activeStudent?.sliderDisplay[5]}
                        newValue={spellingValue2}
                        sliderDispatch={spellingSlider2}
                    />
                </div>
            </div>
        </div>
    )
}

export default SnappetSliders