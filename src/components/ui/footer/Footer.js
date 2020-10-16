import React from 'react';
import logo from './logo.jpg';
import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <img className="Desilogo" src={logo} alt="Logo de empresa"/>
            <a className="DesiLink" href="https://www.desitec.com.ar/"> Desitec </a>
            <h5 className="author"> Manuel Blanco </h5>
        </footer>
    )
}
