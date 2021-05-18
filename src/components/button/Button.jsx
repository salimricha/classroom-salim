import React from 'react';
import './Button.css';

const Button = ({text}) => {
    return (
        <button className="bg-purple-500 text-white border rounded-md px-3 py-1.5">{text}</button>
    )
}


export default Button;