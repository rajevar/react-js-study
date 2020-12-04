import React, { Component } from 'react'
import ChildClass from './ChildClass'
import ChildFunComp from './ChildFunComp'

export default class HookParent extends Component {
    constructor() {
        super();
        this.state = {
            showClassComp: true,
            showFunComp: true,
            blah: true
        }
    }
    toggleClass = () => {
        this.setState({
            showClassComp: !this.state.showClassComp
        })
    }

    toggleFuncComp = () => {
        this.setState({
            showFunComp: !this.state.showFunComp
        })
    }
    danger = () => {
        console.log(`do nothing..{this.state.blah}`);
        this.setState({
            blah: !this.state.blah
        })
    }

    divStyle = {
        margin: "3px",
    };

    render() {
        return (
            <div >
                <button style={this.divStyle} onClick={this.toggleClass} className="btn btn-sm btn-info">ClassComp</button>
                <button className="btn btn-sm btn-info" onClick={this.toggleFuncComp}>FunComp </button>
                <button style={this.divStyle} className="btn btn-sm btn-danger" onClick={this.danger}>Danger</button>
                { this.state.showClassComp && <ChildClass />}
                { this.state.showFunComp && <ChildFunComp />}
            </div>
        )
    }
}
