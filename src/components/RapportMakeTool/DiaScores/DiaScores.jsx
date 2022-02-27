import React from 'react';
import "./diascores.css";
import Score from "../SnappetScores/Score/Score";

function DiaScores({ activeStudent }) {
    return (
        <div className="dia-scores-wrapper">
            <div className="dia-scores">
                <h2>Dia</h2>
                <Score
                    activeStudent={activeStudent}
                    subject="diaRekenen"
                    label="Dia cijfer"
                />
                <Score
                    activeStudent={activeStudent}
                    subject="diaTekst"
                    label="Dia tekst"
                />
                <Score
                    activeStudent={activeStudent}
                    subject="diaWoordenschat"
                    label="Dia woord"
                />
                <Score
                    activeStudent={activeStudent}
                    subject="diaSpelling"
                    label="Dia spelling"
                />
                <div className="reading-scores">
                    <Score
                        activeStudent={activeStudent}
                        subject="avi"
                        label="AVI"
                    />
                    <Score
                        activeStudent={activeStudent}
                        subject="dmt"
                        label="DMT"
                    />
                </div>
            </div>
            <div className="dia-scores">
                <h2>Dia</h2>
                <Score
                    activeStudent={activeStudent}
                    subject="diaRekenen2"
                    label="Dia cijfer"
                />
                <Score
                    activeStudent={activeStudent}
                    subject="diaTekst2"
                    label="Dia tekst"
                />
                <Score
                    activeStudent={activeStudent}
                    subject="diaWoordenschat2"
                    label="Dia woord"
                />
                <Score
                    activeStudent={activeStudent}
                    subject="diaSpelling2"
                    label="Dia spelling"
                />
                <div className="reading-scores">
                    <Score
                        activeStudent={activeStudent}
                        subject="avi2"
                        label="AVI"
                    />
                    <Score
                        activeStudent={activeStudent}
                        subject="dmt2"
                        label="DMT"
                    />
                </div>
            </div>
        </div>
    )
}

export default DiaScores