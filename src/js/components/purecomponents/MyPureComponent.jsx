import React, { PureComponent } from 'react'

class MyPureComponent extends PureComponent {
    render() {
        console.log(" --- this is render() in PureComponent " );
        return (
            <div>
                This is pure component : {this.props.message}
            </div>
        )
    }
}

export default MyPureComponent
