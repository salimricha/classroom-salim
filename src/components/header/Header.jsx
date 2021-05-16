import React from 'react';
import './Header.css';


import Logo from '../logo/Logo';
import Button from '../button/Button';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Logo />
            </div>
            <div className="button-container">
                <Button text = "Login" />
                <Button text = "Register" />
            </div>
        </div>
    )
}


export default Header;