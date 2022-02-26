import React, { useState } from 'react'
import "./goal.css"

import { useDispatch } from "react-redux";
import { updateScores } from "../../../../redux/reducers/studentsSlice";

function Goal({ goals, totalGoals, goalType, goalTotalType }) {
    const dispatch = useDispatch();

    return (
        <div className="goal">
            <input
                type="text"
                defaultValue={goals}
                onChange={(e) => dispatch(updateScores({
                    scoreType: goalType,
                    newScore: e.target.value
                }))}
            />
            <p>/</p>
            <input
                type="text"
                defaultValue={totalGoals}
                onChange={(e) => dispatch(updateScores({
                    scoreType: goalTotalType,
                    newScore: e.target.value
                }))}
            />
        </div>
    )
}

export default Goal

