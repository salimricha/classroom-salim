import React from 'react';
import './input.css';

const Input = ({text}) => {
    return (
        <div className="input-container">
            <img class="img" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-256.png" alt=""></img>
            <input className="input" placeholder="Your text here">{text}</input>
        </div>
        
    )
}


export default Input;