import React from 'react';
import logo from '../images/logo.png';
import details from '../images/details.png';

const Header = () => {
    return (
        <div className="header">
            <img className="logo-imagen" alt="Imagen Rick and Morty" src={details} />
            <img className="logo" alt="Logo Rick and Morty" src={logo} />

        </div>
    )
}

export default Header;