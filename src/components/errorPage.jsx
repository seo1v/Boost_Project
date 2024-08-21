import React from 'react';
import "../styles/errorPage.css";
import errorlogo from '../assets/error404.svg'; 
import logo from '../assets/logo.svg'; // 로고 임포트

function ErrorPage () {
    return (
    <div className="page-container">
        <div className="logo-content">
          <img src={logo} alt="logo" />
        </div>
  
        <div className="form-container">
          <img src={errorlogo} alt="error404" />
        </div>
      </div>
    );
}

export default ErrorPage;
