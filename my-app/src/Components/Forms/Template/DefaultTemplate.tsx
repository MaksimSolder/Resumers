import React, {useEffect, useState} from 'react';

const DefaultTemplate = ({data}: any) => {
    const [dataFrom, setDataFrom] = useState(data);
    useEffect(() => {
        setDataFrom(data);
    },[data])
    return (
        <div>
            <div>{dataFrom.agilee}</div>
            <div>{dataFrom.cost}</div>
            <div>{dataFrom.date}</div>
            <div>{dataFrom.email}</div>
            <div>{dataFrom.family}</div>
            <div>{dataFrom.fio}</div>
            <div>{dataFrom.gender}</div>
            <div>{dataFrom.mentain}</div>
        </div>
    );
};

export default DefaultTemplate;