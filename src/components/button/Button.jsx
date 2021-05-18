import React from 'react';
//import './Button.css';

const Button = ({text}) => {
    return (
        <button className="bg-purple-500 text-white border rounded-md ">{text}</button>
    )
}


export default Button;