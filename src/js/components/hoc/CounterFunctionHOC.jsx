import React, { Component } from 'react'

// This is the HOC aka Higher Order Component.
// https://www.youtube.com/watch?v=rsBQj6X7UK8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=34

const CounterFunction = (OriginalComponent, incrementBy) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                count: 0
            }
        }
        handleIncrement = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementBy }
            });
        }

        render() {
            return <OriginalComponent count={this.state.count}
                incrementCount={this.handleIncrement}
                {... this.props}
            />
        }
    }
    return NewComponent;
}
export default CounterFunction;
