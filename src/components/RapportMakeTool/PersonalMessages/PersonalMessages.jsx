import React from 'react'
import "./personalMessages.css"
import Message from './Message/Message'

function PersonalMessages({ activeStudent }) {
    return (
        <div className="personal-messages-wrapper">
            <div className="personal-messages">
                <h2>Rapport 1</h2>
                <Message
                    activeStudent={activeStudent}
                    label="Persoonlijk doel"
                    note="personalNotes"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Ontwikkeling"
                    note="personalGoal"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Mijn Parel"
                    note="personalPearl"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Sociale omgang"
                    note="personalSocialSkills"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Zelfstandigheid"
                    note="personalIndependence"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Werkhouding"
                    note="personalWorkEthic"
                />
            </div>
            <div className="personal-messages">
                <h2>Rapport 2</h2>
                <Message
                    activeStudent={activeStudent}
                    label="Persoonlijk doel"
                    note="personalNotes2"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Ontwikkeling"
                    note="personalGoal2"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Mijn Parel"
                    note="personalPearl2"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Sociale omgang"
                    note="personalSocialSkills2"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Zelfstandigheid"
                    note="personalIndependence2"
                />
                <Message
                    activeStudent={activeStudent}
                    label="Werkhouding"
                    note="personalWorkEthic2"
                />
            </div>
        </div>
    )
}

export default PersonalMessages