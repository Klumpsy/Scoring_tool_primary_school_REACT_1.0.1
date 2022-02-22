import React, { useEffect } from 'react'
import "./snappetSliders.css"

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
    rekenenSlider,
    taalSlider,
    spellingSlider,
    rekenenSliderValue,
    taalSliderValue,
    spellingSliderValue
} from "../../../redux/reducers/snappetSlice";

function SnappetSliders({ activeStudent }) {
    const dispatch = useDispatch()
    const rekenenValue = useSelector(rekenenSliderValue);
    const taalValue = useSelector(taalSliderValue);
    const spellingValue = useSelector(spellingSliderValue);

    return (
        <div className="slider-container-wrapper">
            <div className="slider-container-rapporten">
                <div className="slidercontainer">
                    <h2>Rekenen</h2>
                    <span>{`Vorige slider waarde: ${activeStudent?.sliderDisplay[0]}`}</span>
                    <div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={rekenenValue}
                            className="slider"
                            id="range-rekenen"
                            onChange={(e) => dispatch(rekenenSlider(e.target.value))}
                        />
                        <span className="range-display">{rekenenValue}</span>
                    </div>
                </div>
            </div>
            <div className="slider-container-rapporten">
                <div className="slidercontainer">
                    <h2>Rekenen</h2>
                    <span>{`Vorige slider waarde: ${activeStudent?.sliderDisplay[0]}`}</span>
                    <div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={rekenenValue}
                            className="slider"
                            id="range-rekenen"
                            onChange={(e) => dispatch(rekenenSlider(e.target.value))}
                        />
                        <span className="range-display">{rekenenValue}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnappetSliders