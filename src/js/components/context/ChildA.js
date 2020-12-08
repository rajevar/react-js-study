import React, { useContext } from 'react'
import ChildB from './ChildB';
import { UserContext } from './ComtextHook';

const ChildA = () => {
    const divStyle = {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderTitle: 'abc'
    }
    const user = useContext(UserContext)
    return (
        <React.Fragment>
            <br />
            <div style={divStyle}> [context] Child: {user}
                <ChildB />
            </div>

        </React.Fragment>
    )
}

export default ChildA;