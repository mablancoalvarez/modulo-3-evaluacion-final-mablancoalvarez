import React from 'react';
import logo from '../images/logo.png';

const Header = () => {


    return (
        <div>
        <img className = "logo" alt="Logo Rick and Morty" src= {logo}  />
        </div>
    )
}

export default Header;