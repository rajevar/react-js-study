import React, { useContext } from 'react'
import { UserContext } from './ComtextHook'

export default function ChildB() {
    const user = useContext(UserContext)
    return (
        <div>
            Inner Child: {user}
        </div>
    )
}
