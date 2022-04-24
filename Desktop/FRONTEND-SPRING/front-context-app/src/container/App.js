import React, { useState, useContext } from "react";
import UserSignupPage from "../pages/signUpPage/UserSignupPage";
import LoginPage from "../pages/loginPage/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./../pages/home-page/HomePage";
import UserPage from "./../pages/user-page/UserPage";
import NavBar from "./../components/NavBar";
import { AuthenticationContext } from "../shared/AuthenticationContext";

function App() {
  const { state } = useContext(AuthenticationContext);
 
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route rindex path="user" element={<div> Write the User Name </div>} />
        <Route path="user/:username" element={<UserPage/>} />
        <Route path="signup" element={<UserSignupPage />} />
        {!state.isLoggin && <Route path="login" element={<LoginPage />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*/
<div className="row">
      <div className="col">
          <UserSignupPage />
      </div>
      <div className="col">
          <LoginPage />
      </div>
    </div>
/*/
