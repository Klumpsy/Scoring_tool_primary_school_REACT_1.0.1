import React from 'react'
import "./studentPersonalMessages.css"

function StudentPersonalMessagesPartOne({ student }) {

    return (
        <div>
            <h2>Persoonlijk</h2>
            <div>
                <h3>Persoonlijk leerdoel</h3>
                <div className="text-area-container">
                    <div className="text-area">
                        {student.personalNotes}
                    </div>
                    <div className="text-area">
                        {student.personalNotes2 ? student.personalNotes2 : ""}
                    </div>
                </div>
            </div>
            <div>
                <h3>Ontwikkeling</h3>
                <div className="text-area-container">
                    <div className="text-area">
                        {student.personalGoal}
                    </div>
                    <div className="text-area">
                        {student.personalGoal2 ? student.personalGoal2 : ""}
                    </div>
                </div>
            </div>
            <div>
                <h3>Mijn parel</h3>
                <div className="text-area-container">
                    <div className="text-area">
                        {student.personalPearl}
                    </div>
                    <div className="text-area">
                        {student.personalPearl2 ? student.personalPearl2 : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentPersonalMessagesPartOne