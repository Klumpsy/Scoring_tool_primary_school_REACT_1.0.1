import React from 'react'
import "../studentResearch.css"
import image from "../../../../media/images/checkmark.png";

function ListItem({ item, title }) {
    return (
        <>
            {item && item.length > 0 ?
                <>
                    <h3>{title}</h3>
                    <ul>
                        {item.map(item => (
                            <li key={item}>
                                <img
                                    src={image}
                                    alt="Checkmark"
                                    className="checkmark-icon"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
                : ""
            }
        </>
    )
}

export default ListItem