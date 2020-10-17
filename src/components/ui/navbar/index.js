import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Inicio
            </Link>

            <Link 
                className="navbar-brand" 
                to="./:id"
            >
                User Details
            </Link>
            
        </nav>
    )
}