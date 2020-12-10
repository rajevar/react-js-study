import React from 'react'
import ChildA from './ChildA'

export const UserContext = React.createContext();

const ComtextHook = () => {
    return (
        <div>
            <UserContext.Provider value={'John Doe'}>
                <ChildA />
            </UserContext.Provider>
        </div>
    )
}

export default ComtextHook;
