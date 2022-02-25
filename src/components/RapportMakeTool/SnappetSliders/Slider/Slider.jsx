import React from 'react'
import "./slider.css"

import { useDispatch } from "react-redux";

function Slider({ title, lastValue, sliderDispatch }) {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{title}</h2>
            <div className="display-container">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={lastValue ? lastValue : 0}
                    className="slider"
                    id="range-rekenen"
                    onChange={(e) => dispatch(sliderDispatch(e.target.value))}
                />
                <span className="range-display">{lastValue}</span>
            </div>
        </div>
    )
}

export default Slider