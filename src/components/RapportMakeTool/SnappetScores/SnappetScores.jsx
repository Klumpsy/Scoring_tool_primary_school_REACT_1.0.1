import React from 'react'
import "./snappetScores.css"
import Score from './Score/Score';

function SnappetScores({ activeStudent }) {
    return (
        <div className="snappet-scores-wrapper">
            <div className="snappet-scores">
                <h2>Snappet</h2>
                <div className="snappet-scores-container">
                    <Score
                        activeStudent={activeStudent}
                        subject="rekenenSnappet"
                        label="Rekenen"
                    />
                    <Score
                        activeStudent={activeStudent}
                        subject="taalSnappet"
                        label="Taal"
                    />
                    <Score
                        activeStudent={activeStudent}
                        subject="spellingSnappet"
                        label="Spelling"
                    />
                </div>
            </div>
            <div className="snappet-scores">
                <h2>Snappet 2</h2>
                <div className="snappet-scores-container">
                    <Score
                        activeStudent={activeStudent}
                        subject="rekenenSnappet2"
                        label="Rekenen"
                    />
                    <Score
                        activeStudent={activeStudent}
                        subject="taalSnappet2"
                        label="Taal"
                    />
                    <Score
                        activeStudent={activeStudent}
                        subject="spellingSnappet2"
                        label="Spelling"
                    />
                </div>
            </div>
        </div>
    )
}

export default SnappetScores