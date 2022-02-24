import React from 'react'
import "./slider.css"

import { useDispatch } from "react-redux";

function Slider({ title, lastValue, newValue, sliderDispatch }) {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{title}</h2>
            <span>{`Vorige slider waarde: ${lastValue}`}</span>
            <div className="display-container">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={newValue}
                    className="slider"
                    id="range-rekenen"
                    onChange={(e) => dispatch(sliderDispatch(e.target.value))}
                />
                <span className="range-display">{newValue}</span>
            </div>
        </div>
    )
}

export default Slider