import React from 'react';
import data from "./data/form.json";
import Input from "./Input/Input";

const FormBasic = ({setData}: any) => {
    return (
        <div className="formsdesk__basic">
            <h3>Основная информация</h3>
            {data.basic.map((input, index) => {
                return <Input
                    key={index}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    keys={input.keys}
                    change={setData}
                />
            })}
        </div>
    );
};

export default FormBasic;