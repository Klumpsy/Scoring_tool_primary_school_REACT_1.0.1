import React from 'react'
import "./research.css";

//Components
import Item from './Item/Item';

function Research({ activeStudent }) {

    return (
        <div className="research-wrapper">
            <div className="research-container">
                <Item
                    researchItems={activeStudent?.levelwork}
                    activeStudent={activeStudent}
                    title="Levelwerk"
                />
                <Item
                    researchItems={activeStudent?.spreekbeurten}
                    activeStudent={activeStudent}
                    title="Spreekbeurt"
                />
                <Item
                    researchItems={activeStudent?.boekbesprekingen}
                    activeStudent={activeStudent}
                    title="Boekbespreking"
                />
                <Item
                    researchItems={activeStudent?.werkstukken}
                    activeStudent={activeStudent}
                    title="Werkstuk"
                />
                <Item
                    researchItems={activeStudent?.projecten}
                    activeStudent={activeStudent}
                    title="Projecten"
                />
            </div>
        </div>
    )
}

export default Research