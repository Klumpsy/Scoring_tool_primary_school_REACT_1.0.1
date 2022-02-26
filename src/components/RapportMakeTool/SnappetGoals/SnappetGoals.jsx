import React from 'react'
import "./snappetGoals.css"
import Goal from './Goal/Goal'

function SnappetGoals({ activeStudent }) {
    return (
        <div className="snappet-goals-wrapper">
            <div className="snappet-goals">
                <h2>Snappet doelen</h2>
                <Goal
                    goals={activeStudent?.behaaldeDoelenRekenen}
                    totalGoals={activeStudent?.doelenTotaalRekenen}
                    goalType="behaaldeDoelenRekenen"
                    goalTotalType="doelenTotaalRekenen"
                />
                <Goal
                    goals={activeStudent?.behaaldeDoelenTaal}
                    totalGoals={activeStudent?.doelenTotaalTaal}
                    goalType="behaaldeDoelenTaal"
                    goalTotalType="doelenTotaalTaal"
                />
                <Goal
                    goals={activeStudent?.behaaldeDoelenSpelling}
                    totalGoals={activeStudent?.doelenTotaalSpelling}
                    goalType="behaaldeDoelenSpelling"
                    goalTotalType="doelenTotaalSpelling"
                />
            </div>
            <div className="snappet-goals">
                <h2>Snappet doelen 2</h2>
                <Goal
                    goals={activeStudent?.behaaldeDoelenRekenen2}
                    totalGoals={activeStudent?.doelenTotaalRekenen2}
                    goalType="behaaldeDoelenRekenen2"
                    goalTotalType="doelenTotaalRekenen2"
                />
                <Goal
                    goals={activeStudent?.behaaldeDoelenTaal2}
                    totalGoals={activeStudent?.doelenTotaalTaal2}
                    goalType="behaaldeDoelenTaal2"
                    goalTotalType="doelenTotaalTaal2"
                />
                <Goal
                    goals={activeStudent?.behaaldeDoelenSpelling2}
                    totalGoals={activeStudent?.doelenTotaalSpelling2}
                    goalType="behaaldeDoelenSpelling2"
                    goalTotalType="doelenTotaalSpelling2"
                />
            </div>
        </div>
    )
}

export default SnappetGoals