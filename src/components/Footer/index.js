import React from 'react';
import logo from './logo.jpg';
import './index.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <a href="https://www.desitec.com.ar/">
          <img className="Desilogo" src={logo} alt="Logo de empresa"/>
        </a>
        <h5 className="author"> Manuel Blanco </h5>
      </div>
    </footer>
  )
}
