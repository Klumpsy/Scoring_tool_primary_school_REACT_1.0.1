import React from 'react'
import "./snappetGoals.css"
import Goal from './Goal/Goal'

function SnappetGoals({ activeStudent }) {
    return (
        <div className="snappet-goals-wrapper">
            <div className="snappet-goals">
                <h2>Snappet doelen</h2>
                <h3>Rekenen</h3>
                <Goal
                    student={activeStudent}
                    goalType="behaaldeDoelenRekenen"
                    goalTotalType="doelenTotaalRekenen"
                />
                <h3>Taal</h3>
                <Goal
                    student={activeStudent}
                    goalType="behaaldeDoelenTaal"
                    goalTotalType="doelenTotaalTaal"
                />
                <h3>Spelling</h3>
                <Goal
                    student={activeStudent}
                    goalType="behaaldeDoelenSpelling"
                    goalTotalType="doelenTotaalSpelling"
                />
            </div>
            <div className="snappet-goals">
                <h2>Snappet doelen 2</h2>
                <h3>Rekenen 2</h3>
                <Goal
                    student={activeStudent}
                    goalType="behaaldeDoelenRekenen2"
                    goalTotalType="doelenTotaalRekenen2"
                />
                <h3>Taal 2</h3>
                <Goal
                    student={activeStudent}
                    goalType="behaaldeDoelenTaal2"
                    goalTotalType="doelenTotaalTaal2"
                />
                <h3>Spelling 2</h3>
                <Goal
                    student={activeStudent}
                    goalType="behaaldeDoelenSpelling2"
                    goalTotalType="doelenTotaalSpelling2"
                />
            </div>
        </div>
    )
}

export default SnappetGoals