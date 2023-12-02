import React from 'react';
import data from "./data/form.json";
import Input from "./Input/Input";

const FormBasic = () => {
    return (
        <div className="formsdesk__basic">
            <h3>Основная информация</h3>
            {data.basic.map((input) => {
                return <Input
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    key={input.key}/>
            })}
        </div>
    );
};

export default FormBasic;