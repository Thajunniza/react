import React, {useState} from 'react';
import * as R from 'ramda';

const ObjectForm = () => {

    const [data, setData]  = useState({
        fName : "Thaj",
        lName : "Chris",
        email : "thaj@gmail.com"
    });

    const setDataValue = (property) => (e) => {
        setData(R.assoc(property,e.target.value,data));
    }

    return (
    <div className='counter'>
        <div >
        <h1>Object Form</h1>
        <label>First Name: 
            <input value={data.fName} onChange={setDataValue('fName')} ></input>
        </label>
        <label>Last Name: 
            <input value={data.lName} onChange={setDataValue('lName')} ></input>
        </label>
        <label>Email: 
            <input value={data.email} onChange={setDataValue('email')} ></input>
        </label>
        </div>
        <div>
            <h2>Your name is {data.fName} {data.lName} and your email is {data.email}</h2>
        </div>
    </div>
    )
}

export default ObjectForm;