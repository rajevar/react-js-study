import React, { Component } from 'react'
import CounterFunction from './CounterFunctionHOC';

class HoverCounter extends Component {
    render() {
        const { count, incrementCount, name } = this.props;
        return (
            <div>
                <div key="b1" onMouseOver={incrementCount}>{name} | Hovered {count} </div>
            </div>
        )
    }
}

export default CounterFunction(HoverCounter, 1);