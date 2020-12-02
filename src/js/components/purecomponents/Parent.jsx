import React, { Component } from 'react'
import ClassComponent from './ClassComponent';
import MyPureComponent from './MyPureComponent';
/**
 * Pure components does shallow comparison of object before redering on the screen.
 */
export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello"
        }
    }
    refresh() {
        setTimeout(() => {
            this.setState({
                message: "Hello"
            })
        }, 2000);
    }

    render() {
        return (
            <div className="p-4" key="123">
                This parent holds Pure and ClassComp children.
                <MyPureComponent message={this.state.message} />
                <ClassComponent message={this.state.message} />
            </div>
        )
    }
    componentDidMount() {
        this.refresh();
    }
}
