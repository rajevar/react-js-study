import React, { Component } from 'react'

/**
 * https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37
 */
class RenderProps extends Component {
    render() {
        return (
            <div>
                Hello , {this.props.render(false)}.
                <br /><br />
            </div>
        )
    }
}

export default RenderProps;
