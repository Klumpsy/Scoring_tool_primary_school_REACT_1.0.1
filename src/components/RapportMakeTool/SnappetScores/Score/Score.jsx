import React from 'react'
import "./score.css"

import { useDispatch } from "react-redux";
import { updateScores } from "../../../../redux/reducers/studentsSlice";

function Score({ activeStudent, subject, label }) {
    const dispatch = useDispatch();

    return (
        <div className="scores">
            <label htmlFor={subject}>{label}</label>
            <input
                value={activeStudent ? activeStudent[subject] : ""}
                id={subject}
                onChange={(e) => dispatch(updateScores({
                    scoreType: subject,
                    newScore: e.target.value
                }))}
            />
        </div>
    )
}

export default Score