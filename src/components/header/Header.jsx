import React from 'react';
//import './Header.css';


import Logo from '../logo/Logo';
import Button from '../button/Button';


const Header = () => {
    return (
        <div className="flex justify-between px-5 py-3 bg-white">
            <div>
                <Logo />
            </div>
            <div className="flex gap-2.5">
                <Button text = "Login" />
                <Button text = "Register" />
            </div>
        </div>
    )
}


export default Header;