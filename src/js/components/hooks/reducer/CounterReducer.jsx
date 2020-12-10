import React, {useReducer} from 'react'

const initialValue = 0;

function CounterReducer() {

    const reducer = (state, action) => {
        switch(action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialValue;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <span className="font-weight-bold"> {count} </span>
            <button className="btn btn-sm btn-primary" onClick={() => dispatch('increment')}> + </button>
            <button className="btn btn-sm btn-secondary ml-2 mr-2" onClick={() => dispatch('decrement')}> - </button>
            <button className="btn btn-sm btn-info" onClick={() => dispatch('reset')}> # </button>
        </div>
    )
}

export default CounterReducer;