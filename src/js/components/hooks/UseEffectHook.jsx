import React, { useState, useEffect } from 'react'

/**
 * The Effect Hook lets you perform side effects in function components.
 *  useEffect Hook is componentDidMount, componentDidUpdate, and componentWillUnmount of class component combined.
 * 
 *  Child calls React.memo() for memoization
 */
function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [ticker, setTicker] = useState(100);

    useEffect(() => {
        //let interval = setTimeout(() => setTicker(prevCount => prevCount + 1), 1000)
        document.title = `Clicked ${count} times.`
        return () => {
            console.log("clearing interval...");
            //clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <button className="btn btn-secondary btn-sm" onClick={() => setCount(count + 1)}> useEffHook {count}</button>
            <div> {ticker}</div>
        </div>
    )
}

export default UseEffectHook;
