import React from 'react'
import "../studentResearch.css"
import image from "../../../../media/images/checkmark.png";

function ListItem({ item, title }) {
    return (
        <>
            {item ?
                <>
                    <h3>{title}</h3>
                    <ul>
                        {item.map(item => (
                            <li key={item}>
                                <img
                                    src={image}
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