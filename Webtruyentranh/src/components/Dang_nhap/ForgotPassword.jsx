import React from "react";
import "./ForgotPassword.css";

function ForgotPassword({ switchForm }) {
  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form">
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Nhập email" />
        </div>
        <button type="submit" className="reset-button">Gửi yêu cầu</button>
        <div className="back-link">
          <a href="#" onClick={() => switchForm("login")}>Quay lại đăng nhập</a>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
