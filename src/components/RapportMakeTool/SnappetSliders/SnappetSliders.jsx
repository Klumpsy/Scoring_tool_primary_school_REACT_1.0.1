import React from 'react'
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
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={Number(activeStudent.sliderDisplay[0])}
                        className="slider"
                        id="range-rekenen"
                        onChange={(e) => dispatch(rekenenSlider(e.target.value))}
                    />
                    <span className="range-display">{Number(activeStudent.sliderDisplay[0])}</span>
                </div>
                <div className="slidercontainer">
                    <h2>Taal</h2>
                    <div className="slider-value-container">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={taalValue}
                            className="slider"
                            id="range-taal"
                            onChange={(e) => dispatch(taalSlider(e.target.value))}
                        />
                        <span className="range-display">{taalValue}</span>
                    </div>
                </div>
                <div className="slidercontainer">
                    <h2>Spelling</h2>
                    <div className="slider-value-container">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={spellingValue}
                            className="slider"
                            id="range-spelling"
                            onChange={(e) => dispatch(spellingSlider(e.target.value))}
                        />
                        <span className="range-display">{spellingValue}</span>
                    </div>
                </div>
            </div>
            <div className="slider-container-rapporten">
                <div className="slidercontainer">
                    <h2>Rekenen 2</h2>
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
                <div className="slidercontainer">
                    <h2>Taal 2</h2>
                    <div className="slider-value-container">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={taalValue}
                            className="slider"
                            id="range-taal"
                            onChange={(e) => dispatch(taalSlider(e.target.value))}
                        />
                        <span className="range-display">{taalValue}</span>
                    </div>
                </div>
                <div className="slidercontainer">
                    <h2>Spelling 2</h2>
                    <div className="slider-value-container">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={spellingValue}
                            className="slider"
                            id="range-spelling"
                            onChange={(e) => dispatch(spellingSlider(e.target.value))}
                        />
                        <span className="range-display">{spellingValue}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnappetSliders