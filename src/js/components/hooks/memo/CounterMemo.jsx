import React, { useState, useMemo } from 'react'
/**
 * without useMemo if C2 is clicked, it takes 1 second to render.
 * This is because when the component get re-rendered on clicking C2, isEven is executed.
 * 
 * https://www.youtube.com/watch?v=qySZIzZvZOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=70
 */

function CounterMemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    function addC1() {
        setCounterOne(counterOne + 1);
    }
    function addC2() {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        // adding 2 seconds delay
        var e = new Date().getTime() + (1 * 1000);
        while (new Date().getTime() <= e) { }
        return counterOne % 2 == 0 ? 'Even' : 'Odd'
    }, [counterOne]); // look for change in counterOne before executing the method.


    return (
        <div>
            <button className="btn btn-sm btn-info mr-1" onClick={addC1}> C1 -  {counterOne} </button>
            <span>{isEven} </span>
            <button className="btn btn-sm btn-info ml-1" onClick={addC2}> C2 </button>
            <span> {counterTwo}</span>
        </div>
    )
}

export default CounterMemo;