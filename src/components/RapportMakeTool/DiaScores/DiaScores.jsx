import React from 'react'
import "./diascores.css"

function DiaScores({ activeStudent }) {
    return (
        <div className="dia-scores-wrapper">
            <div className="dia-scores">
                <h2>Dia</h2>
                <label htmlFor="dia-rekenen">DIA cijfer</label>
                <input type="text" defaultValue={activeStudent?.diaRekenen} id="dia-rekenen" />
                <label htmlFor="dia-rekenen">DIA Tekst</label>
                <input type="text" defaultValue={activeStudent?.diaTekst} id="dia-tekst" />
                <label htmlFor="dia-rekenen">DIA Woord</label>
                <input type="text" defaultValue={activeStudent?.diaWoordenschat} id="dia-woordenschat" />
                <label htmlFor="dia-rekenen">DIA Spelling</label>
                <input type="text" defaultValue={activeStudent?.diaSpelling} id="dia-spelling" />
                <div className="reading-scores">
                    <label htmlFor="dia-rekenen">AVI</label>
                    <input type="text" defaultValue={activeStudent?.avi} id="dia-spelling" />
                    <label htmlFor="dia-rekenen">DMT</label>
                    <input type="text" defaultValue={activeStudent?.dmt} id="dia-spelling" />
                </div>
            </div>
            <div className="dia-scores">
                <h2>Dia 2</h2>
                <label htmlFor="dia-rekenen">DIA cijfer</label>
                <input type="text" defaultValue={activeStudent?.diaRekenen2} id="dia-rekenen" />
                <label htmlFor="dia-rekenen">DIA Tekst</label>
                <input type="text" defaultValue={activeStudent?.diaTekst2} id="dia-tekst" />
                <label htmlFor="dia-rekenen">DIA Woord</label>
                <input type="text" defaultValue={activeStudent?.diaWoordenschat2} id="dia-woordenschat" />
                <label htmlFor="dia-rekenen">DIA Spelling</label>
                <input type="text" defaultValue={activeStudent?.diaSpelling2} id="dia-spelling" />
                <div className="reading-scores">
                    <label htmlFor="dia-rekenen">AVI</label>
                    <input type="text" defaultValue={activeStudent?.avi2} id="dia-spelling" />
                    <label htmlFor="dia-rekenen">DMT</label>
                    <input type="text" defaultValue={activeStudent?.dmt2} id="dia-spelling" />
                </div>
            </div>
        </div>
    )
}

export default DiaScores