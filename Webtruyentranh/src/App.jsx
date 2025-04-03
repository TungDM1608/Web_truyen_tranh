import React, { useState } from "react";
import Login from "./components/Dang_nhap/Login";
import Register from "./components/Dang_nhap/Register";
import ForgotPassword from "./components/Dang_nhap/ForgotPassword";
import './App.css'; 

function App() {
  const [formType, setFormType] = useState("login"); // 'login', 'register', 'forgotPassword'

  function switchForm(type) {
    setFormType(type);
  }

  return (
    <div>
      {formType === "login" && <Login switchForm={switchForm} />}
      {formType === "register" && <Register switchForm={switchForm} />}
      {formType === "forgotPassword" && <ForgotPassword switchForm={switchForm} />}
    </div>
  );
}

export default App;

  