import React from 'react'
import "./goal.css"

function Goal({ goals, totalGoals }) {
    return (
        <div className="goal">
            <input type="text" defaultValue={goals} />
            <p>/</p>
            <input type="text" defaultValue={totalGoals} />
        </div>
    )
}

export default Goal

