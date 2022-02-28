import React, { useEffect, useState } from 'react'
import "./item.css"

//React Icons
import { RiFileAddLine, RiDeleteBinFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

//Redux 
import { useDispatch } from "react-redux";
import { updateProjects, removeProject } from "../../../../redux/reducers/studentsSlice";

function Item({ title, researchItems, activeStudent }) {
    const [items, setItems] = useState(researchItems)
    const dispatch = useDispatch();

    const cases = {
        "Levelwerk": "levelwork",
        "Spreekbeurt": "spreekbeurten",
        "Boekbespreking": "boekbesprekingen",
        "Werkstuk": "werkstukken",
        "Projecten": "projecten"
    }

    useEffect(() => {
        setItems(researchItems)
    }, [researchItems, activeStudent])

    const handleAdd = () => {
        const item = prompt("Voeg item toe: ")
        if (item) {
            dispatch(updateProjects({
                type: cases[title],
                item: item
            }))
        } else {
            return
        }
    }

    const handleDelete = (ind) => {
        dispatch(removeProject({
            type: cases[title],
            index: ind
        }))
    }

    return (
        <div>
            <div className="title-container">
                <h2>{title}</h2>
                <RiFileAddLine
                    size={25}
                    className="add-button"
                    onClick={handleAdd}
                />
            </div>
            <div className="project-container">
                {
                    items?.map((item, index) => (
                        <div key={`${item}added${index}`} className="project">
                            <IoMdCheckmarkCircleOutline size={25} />
                            <p className="item-name">{item}</p>
                            <RiDeleteBinFill
                                size={25}
                                className="delete-item"
                                onClick={() => handleDelete(index)}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Item





