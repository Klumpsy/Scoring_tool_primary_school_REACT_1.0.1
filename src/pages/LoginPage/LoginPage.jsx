import React, { useState } from 'react'
import "./loginPage.css";

//Firebase Functions
import { login } from '../../firebaseFunctions/auth';

//Redux
import { useDispatch } from "react-redux";
import { logTeacher } from "../../redux/reducers/loggedTeacherSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault()

    login(username, userPassword)
    dispatch(logTeacher(username))
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <h1>Spreng-El Login</h1>
        <form className="label-container" onSubmit={handleLogin}>
          <label>Naam:
            <input
              type="email"
              onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>Wachtwoord:
            <input
              type="password"
              onChange={(e) => setUserPassword(e.target.value)} />
          </label>
          <button type="onSubmit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
