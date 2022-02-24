import React, { useEffect, useState } from 'react'
import "./item.css"

//React Icons
import { RiFileAddLine, RiDeleteBinFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

//Redux 
import { useDispatch } from "react-redux";
import { updateProjects, removeProject } from "../../../../redux/reducers/studentsSlice";

function Item({ title, researchItems, activeStudent }) {
    const [items, setItems] = useState(null)
    const [student, setStudent] = useState(activeStudent)
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
        setStudent(activeStudent)
    }, [researchItems, activeStudent])

    const handleChange = () => {
        dispatch(updateProjects({
            type: cases[title],
        }))
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
                    onClick={handleChange}
                />
            </div>
            <div className="project-container">
                {
                    items?.map((item, index) => (
                        <div
                            key={`${item}added${index}`}
                            className="project"
                        >
                            <IoMdCheckmarkCircleOutline size={25} />
                            <input defaultValue={item} />
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





