import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-area">
        <div className="card">
          
          <div className="input-field">
            <input className="email-input" placeholder="Email"></input>
          
            <input className="password-input" placeholder="Password"></input>
          </div>

          <div className="btn">
            <button className="register-btn">
                Register
            </button>
            <button className="login-btn">
                Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
