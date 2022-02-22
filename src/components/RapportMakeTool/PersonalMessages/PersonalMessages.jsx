import React from 'react'
import "./personalMessages.css"

function PersonalMessages({ activeStudent }) {
    return (
        <div className="personal-messages-wrapper">
            <div className="personal-messages">
                <h2>Rapport 1</h2>
                <label htmlFor="persoonlijk-doel">Persoonlijk doel</label>
                <textarea placeholder={activeStudent?.personalNotes} id="persoonlijk-doel" />
                <label htmlFor="ontwikkeling">Ontwikkeling</label>
                <textarea placeholder={activeStudent?.personalGoal} id="ontwikkeling" />
                <label htmlFor="mijn-parel">Mijn Parel</label>
                <textarea placeholder={activeStudent?.personalPearl} id="mijn-parel" />
                <label htmlFor="sociale-omgang">Sociale omgang</label>
                <textarea placeholder={activeStudent?.personalSocialSkills} id="sociale-omgang" />
                <label htmlFor="zelfstandigheid">Zelfstandigheid</label>
                <textarea placeholder={activeStudent?.personalIndependence} id="zelfstandigheid" />
                <label htmlFor="werkhouding">Werkhouding</label>
                <textarea placeholder={activeStudent?.personalWorkEthic} id="werkhouding" />
            </div>
            <div className="personal-messages">
                <h2>Rapport 2</h2>
                <label htmlFor="persoonlijk-doel2">Persoonlijk doel</label>
                <textarea placeholder={activeStudent?.personalNotes2} id="persoonlijk-doel2" />
                <label htmlFor="ontwikkeling2">Ontwikkeling</label>
                <textarea placeholder={activeStudent?.personalGoal2} id="ontwikkeling2" />
                <label htmlFor="mijn-parel2">Mijn Parel</label>
                <textarea placeholder={activeStudent?.personalPearl2} id="mijn-parel2" />
                <label htmlFor="sociale-omgang2">Sociale omgang</label>
                <textarea placeholder={activeStudent?.personalSocialSkills2} id="sociale-omgang2" />
                <label htmlFor="zelfstandigheid2">Zelfstandigheid</label>
                <textarea placeholder={activeStudent?.personalIndependence2} id="zelfstandigheid2" />
                <label htmlFor="werkhouding2">Werkhouding</label>
                <textarea placeholder={activeStudent?.personalWorkEthic2} id="werkhouding2" />
            </div>
        </div>
    )
}

export default PersonalMessages