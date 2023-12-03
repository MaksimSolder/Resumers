import React from 'react';
import Input from "./Input/Input";
import dataf from "./data/form.json";

const FormsPrivateInfo = ({setData} : any) => {
    return (
            <div className="formsdesk__basic">
                <h3>Личная информация</h3>
                {dataf.private.map((input,index) => {
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

export default FormsPrivateInfo;