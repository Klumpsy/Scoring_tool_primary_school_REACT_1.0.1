import React from 'react'
import "../studentSnappet.css"

function SliderKnob({ student, number }) {
    return (
        <div
            size={18}
            className="slider-knob"
            style={{ marginLeft: `${[student.sliderDisplay[number] * 2]}px` }}
        >
            <span className="slider-value">{student.sliderDisplay[number]}</span>
        </div>
    )
}

export default SliderKnob