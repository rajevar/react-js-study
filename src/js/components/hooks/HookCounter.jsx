import React, { useState } from 'react'

function HookCounter() {
    const divStyle = {
        display: 'flex'
    };

    const [count = 0, setCount] = useState(0);
    return (
        <div style={divStyle}>
            <button className="btn btn-warning btn-sm" onClick={() => setCount(prevState => prevState + 1)}> + </button>
            <div> Count {count}</div>
            <button className="btn btn-warning btn-sm" onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
        </div>
    )
}

export default HookCounter;
