import React from 'react'
import { useDispatch } from "react-redux";
import { updateScores } from "../../../../redux/reducers/studentsSlice";

function Message({ activeStudent, note, label }) {
    const dispatch = useDispatch()
    return (
        <>
            <label
                htmlFor={note}>{label}</label>
            <textarea
                value={activeStudent[note] ? activeStudent[note] : ""}
                id={note}
                onChange={(e) => dispatch(updateScores({
                    scoreType: note,
                    newScore: e.target.value
                }))}
            />
        </>
    )
}

export default Message


