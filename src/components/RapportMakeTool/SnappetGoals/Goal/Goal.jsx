import React from 'react'
import "./goal.css"

function Goal({ goals, totalGoals }) {
    return (
        <div className="goal">
            <input type="text" value={goals} />
            <p>/</p>
            <input type="text" value={totalGoals} />
        </div>
    )
}

export default Goal

