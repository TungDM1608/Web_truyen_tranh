import React from 'react';
import './Login.css'; 

function Login({ switchForm }) {
  return (
    <div className="login-container">
      <div className="login-form">

        <div id="inUsername" className="input-group">
          <label htmlFor="username">Tên người dùng</label>
          <input type="text" id="username" placeholder="Nhập tên người dùng" />
        </div>

        <div id="inPassword" className="input-group">
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" id="password" placeholder="Nhập mật khẩu" />
        </div>

        <button type="submit" className="login-button">
          Đăng nhập
        </button>

        <div className="forgot-links">
        <a href="#" onClick={() => switchForm("forgotPassword")}>Quên Tên người dùng / Mật khẩu?</a>
        </div>

        <div className="create-account">
        Chưa có tài khoản? <a href="#" onClick={() => switchForm("register")}>Tạo mới</a>
        </div>
      </div>
    </div>
  );
}

export default Login;