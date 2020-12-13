import React from 'react'
import useInput from './useInput';

function CustomHook() {
    const [firstName, resetFirstName, bindFirstName] = useInput('');
    const [lasttName, resetLastName, bindLastName] = useInput('');

    function showAlert() {
        alert(firstName + ", " + lasttName);
    }
    return (
        <div>
            <input className="form-control" {...bindFirstName} value={firstName}></input>
            <input className="form-control" {...bindLastName} value={lasttName}></input>
            <button className="btn btn-info btn-sm" onClick={showAlert}> alert</button>
        </div>
    )
}

export default CustomHook;
