import React from 'react'
import "./loginPage.css";

const Login = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <h1>Spreng-El Login</h1>
        <div className="label-container">
          <label>Naam:
            <input />
          </label>
          <label>Wachtwoord:
            <input />
          </label>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
