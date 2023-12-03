import React from 'react';
import {IInput} from "../interfaces/forms";

const Input = ({type, keys, name, placeholder, change} : IInput) => {
    return (
        <div className="formsdesk__inputblock" key={keys}>
            <h4>{name}</h4>
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => change(keys, e.target.value)}/>
        </div>
    );
};

export default Input;