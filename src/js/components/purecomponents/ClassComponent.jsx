import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() {
        console.log(" === this is render() inside ClassComponent..");
        return (
            <div>
                Class Component : : {this.props.message}
            </div>
        )
    }
}
