import React from 'react';
import {IInput} from "../interfaces/forms";

const Input = ({type, key, name, placeholder} : IInput) => {
    return (
        <div className="formsdesk__inputblock" key={key}>
            <h4>{name}</h4>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;