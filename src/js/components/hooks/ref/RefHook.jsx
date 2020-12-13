import React, { useRef, useState, useEffect } from 'react'
/**
 * useRef can also be used as a pointer to DOM element.
 */
function RefHook() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => setTimer(prevVal => prevVal + 1), 1000)
        return () => {
            clearInterval(intervalRef);
        }
    }, [])

    function stopTimer() {
        clearInterval(intervalRef.current);
    }

    return (
        <div>
            Timer: {timer}
            <button className="btn btn-secondary btn-sm ml-2" onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default RefHook;
