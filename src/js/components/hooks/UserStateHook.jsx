import React, { useState } from 'react'
// https://www.youtube.com/watch?v=-3lL8oyev9w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=47
function UserStateHook() {
    const [name, setName] = useState({ first: 'John', last: 'Doe' });
    return (
        <div>
            <form>
                <input type="text" className="form-control" value={name.first}
                    onChange={e => setName({ ...name, first: e.target.value })}>
                </input>
                <input type="text" className="form-control" value={name.last}
                    onChange={e => setName({ ...name, last: e.target.value })}>
                        </input>
                <div>{JSON.stringify(name)}</div>
            </form>
        </div>
    );
}

export default UserStateHook;