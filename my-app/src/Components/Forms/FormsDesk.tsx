import React, {useState} from 'react';
import "./FormsDesk.css";
import FormBasic from "./FormBasic";
import FormsPrivateInfo from "./FormsPrivateInfo";
import DefaultTemplate from "./Template/DefaultTemplate";

const FormsDesk = () => {
    const defaultData = {
      fio: "dddd",
      workfull: "",
      agilee: "",
      cost: "",
      phone: "",
      email: "",
      mentain: "",
        place: "",
        date: "",
        gender: "",
        family: ""
    };
    const [data, setData] = useState(defaultData);

    const rejectData = (key:string, value:any) => {
        const newObj:any = {...data};
        newObj[`${key}`] = value;
        setData(newObj);
    }

    return (
        <div className="formsdesk">
            <FormBasic setData={rejectData}/>
            <FormsPrivateInfo  setData={rejectData}/>
            <DefaultTemplate data={data}/>
        </div>
    );
};

export default FormsDesk;