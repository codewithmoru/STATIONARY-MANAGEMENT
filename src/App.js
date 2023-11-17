import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Home";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import { AuthProvider } from "./AuthProvider";
import Admin from "./Components/Admin";
function App() {
  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Admin" element={<Admin />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
