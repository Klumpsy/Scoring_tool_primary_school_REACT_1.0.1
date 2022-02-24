import React from 'react'
import "./snappetScores.css"

function SnappetScores({ activeStudent }) {
    return (
        <div className="snappet-scores-wrapper">
            <div className="snappet-scores">
                <h2>Snappet</h2>
                <div className="snappet-scores-container">
                    <div>
                        <label htmlFor="snappetSpelling">Spelling</label>
                        <input defaultValue={activeStudent?.spellingSnappet} id="snappetSpelling"></input>
                    </div>
                    <div>
                        <label htmlFor="snappetTaal">Taal</label>
                        <input defaultValue={activeStudent?.taalSnappet} id="snappetTaal"></input>
                    </div>
                    <div>
                        <label htmlFor="snappetRekenen">Rekenen</label>
                        <input defaultValue={activeStudent?.rekenenSnappet} id="snappetRekenen"></input>
                    </div>
                </div>
            </div>
            <div className="snappet-scores">
                <h2>Snappet 2</h2>
                <div className="snappet-scores-container">
                    <div>
                        <label htmlFor="snappetSpelling2">Spelling</label>
                        <input defaultValue={activeStudent?.spellingSnappet2} id="snappetSpelling2" ></input>
                    </div>
                    <div>
                        <label htmlFor="snappetTaal2">Taal</label>
                        <input defaultValue={activeStudent?.spellingTaal2} id="snappetTaal2"></input>
                    </div>
                    <div>
                        <label htmlFor="snappetRekenen2">Rekenen</label>
                        <input defaultValue={activeStudent?.spellingRekenen2} id="snappetRekenen2"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnappetScores