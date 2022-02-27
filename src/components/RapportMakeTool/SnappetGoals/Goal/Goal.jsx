import React, { useState } from 'react'
import "./goal.css"

import { useDispatch } from "react-redux";
import { updateScores } from "../../../../redux/reducers/studentsSlice";

function Goal({ student, goalType, goalTotalType }) {
    const dispatch = useDispatch();

    return (
        <div className="goal">
            <input
                type="text"
                value={student ? student[goalType] : ""}
                onChange={(e) => dispatch(updateScores({
                    scoreType: goalType,
                    newScore: e.target.value
                }))}
            />
            <p>/</p>
            <input
                type="text"
                value={student[goalTotalType]}
                onChange={(e) => dispatch(updateScores({
                    scoreType: goalTotalType,
                    newScore: e.target.value
                }))}
            />
        </div>
    )
}

export default Goal

