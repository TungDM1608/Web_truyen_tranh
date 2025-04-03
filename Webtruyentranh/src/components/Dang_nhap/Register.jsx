import React from "react";
import "./Register.css";

function Register({ switchForm }) {
  return (
    <div className="register-container">
      <form className="register-form">
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div className="input-group">
          <label>Tên người dùng</label>
          <input type="text" placeholder="Nhập tên người dùng" />
        </div>
        <div className="input-group">
          <label>Mật khẩu</label>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <div className="input-group">
          <label>Nhập lại mật khẩu</label>
          <input type="password" placeholder="Nhập lại mật khẩu" />
        </div>
        <button type="submit" className="register-button">Đăng ký</button>
        <div className="login-link">
          Đã có tài khoản? <a href="#" onClick={() => switchForm("login")}>Đăng nhập</a>
        </div>
      </form>
    </div>
  );
}

export default Register;