import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../Base";
//import Admin from "./Admin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/Admin");
    }
    onRegister();
  };
  const clickSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <header className="App-header">
        <h1>PROGRESSIVE EDUCATION SOCIETY'S</h1>
        <h2>Modern College of Engineering,Pune</h2>
        <h3>STATIONARY MANAGEMENT SYSTEM</h3>
      </header>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>MCA Department</h2>
        <h3>Login</h3>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
        <button className="signinbtn" onClick={clickSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
