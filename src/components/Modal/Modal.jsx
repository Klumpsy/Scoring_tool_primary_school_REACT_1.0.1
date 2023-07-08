import React, { useState } from 'react'
import "./modal.css";

import { createStudent } from "../../redux/reducers/studentsSlice";
import { setModalClose } from '../../redux/reducers/rapportModalSlice';
import { useDispatch } from "react-redux";

import { AiFillCloseCircle } from "react-icons/ai";

function PreviewModal() {
  const dispatch = useDispatch()

  const [student, setStudent] = useState("");
  const [group, setGroup] = useState("");
  const [teacher, setTeacher] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (student === "" || group === "" || teacher === "") {
      alert("Incomplete form!")
    } else {
      dispatch(createStudent({ student, group, teacher }))
      dispatch(setModalClose());
    }
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <AiFillCloseCircle className="modal-close-button" size={30} onClick={() => dispatch(setModalClose())} />
        <form onSubmit={(e) => handleAdd(e)}>
          <input placeholder='Naam' onChange={(e) => setStudent(e.target.value)} />
          <input placeholder="Groep" onChange={(e) => setGroup(e.target.value)} />
          <input placeholder="Leerkracht(en)" onChange={(e) => setTeacher(e.target.value)} />
          <button type="submit">Voeg toe</button>
        </form>
      </div>
    </div>
  )
}

export default PreviewModal
