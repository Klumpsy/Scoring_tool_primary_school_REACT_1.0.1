import React from 'react'
import "./personalMessages.css"

function PersonalMessages({ activeStudent }) {
    return (
        <div className="personal-messages-wrapper">
            <div className="personal-messages">
                <h2>Rapport 1</h2>
                <label htmlFor="persoonlijk-doel">Persoonlijk doel</label>
                <textarea value={activeStudent?.personalNotes} id="persoonlijk-doel" />
                <label htmlFor="ontwikkeling">Ontwikkeling</label>
                <textarea value={activeStudent?.personalGoal} id="ontwikkeling" />
                <label htmlFor="mijn-parel">Mijn Parel</label>
                <textarea value={activeStudent?.personalPearl} id="mijn-parel" />
                <label htmlFor="sociale-omgang">Sociale omgang</label>
                <textarea value={activeStudent?.personalSocialSkills} id="sociale-omgang" />
                <label htmlFor="zelfstandigheid">Zelfstandigheid</label>
                <textarea value={activeStudent?.personalIndependence} id="zelfstandigheid" />
                <label htmlFor="werkhouding">Werkhouding</label>
                <textarea value={activeStudent?.personalWorkEthic} id="werkhouding" />
            </div>
            <div className="personal-messages">
                <h2>Rapport 2</h2>
                <label htmlFor="persoonlijk-doel2">Persoonlijk doel</label>
                <textarea value={activeStudent?.personalNotes2} id="persoonlijk-doel2" />
                <label htmlFor="ontwikkeling2">Ontwikkeling</label>
                <textarea value={activeStudent?.personalGoal2} id="ontwikkeling2" />
                <label htmlFor="mijn-parel2">Mijn Parel</label>
                <textarea value={activeStudent?.personalPearl2} id="mijn-parel2" />
                <label htmlFor="sociale-omgang2">Sociale omgang</label>
                <textarea value={activeStudent?.personalSocialSkills2} id="sociale-omgang2" />
                <label htmlFor="zelfstandigheid2">Zelfstandigheid</label>
                <textarea value={activeStudent?.personalIndependence2} id="zelfstandigheid2" />
                <label htmlFor="werkhouding2">Werkhouding</label>
                <textarea value={activeStudent?.personalWorkEthic2} id="werkhouding2" />
            </div>
        </div>
    )
}

export default PersonalMessages