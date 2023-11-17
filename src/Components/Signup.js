import React, { useState } from "react";
import { auth, db } from "../Base";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email
          });
        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
  };

  return (
    <div>
      <header className="App-header">
        <h1>PROGRESSIVE EDUCATION SOCIETY'S</h1>
        <h2>Modern College of Engineering,Pune</h2>
        <h3>STATIONARY MANAGEMENT SYSTEM</h3>
      </header>
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2>MCA Department</h2>
        <h3>SignUp</h3>
        <input
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        ></input>
        <input
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        ></input>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        ></input>
        <button>Sign Up</button>
        <button>Back</button>
      </form>
    </div>
  );
};

export default SignUp;
