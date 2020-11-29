import React, { Component } from 'react'
import CounterFunction from './CounterFunctionHOC';


class ClickCounter extends Component {
    
    render() {
        const {count, incrementCount, name } = this.props;
        return (
            <div>
                <button className="btn btn-info btn-sm" key="b1" onClick={incrementCount}>{name} | Clicked: {count} </button>
            </div>
        )
    }ß
}

export default CounterFunction(ClickCounter, 10);
