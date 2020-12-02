import React, { useEffect } from 'react'

export default function ChildFunComp() {
    useEffect(() => {
        console.log("Child-FunctionalComp == useEffect")
        return () => {
            console.log("Child-FunctionalComp == unmounting..")
        }
    })
    return (
        <div>
            Child - Functional Component.
        </div>
    )
}
