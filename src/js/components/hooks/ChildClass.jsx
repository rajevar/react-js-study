import React, { Component } from 'react'

export default class ChildClass extends Component {

    componentDidMount() {
        console.log("==Child-ClassComp *componentDidMount* ==");
    }
    componentDidUpdate() {
        console.log("==Child-ClassComp *componentDidUpdate* ==");
    }
    componentWillUnmount() {
        console.log("==Child-ClassComp *componentWillUnmount* ==");
    }
    render() {
        console.log("==Child-ClassComp *render* ==");
        return (
            <div>
                Child - Class Component
            </div>
        )
    }
}
