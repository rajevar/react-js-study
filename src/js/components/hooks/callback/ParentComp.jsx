import React, { useState, useCallback } from 'react'
import Count from './Count';
import Button from './Button';

export default function ParentComp() {
    console.log(" **** Parent fun comp **** ");
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(1000);

    const addAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    
    const addSal = useCallback(() => {
        setSalary(salary + 100);
    }, [salary]);

    return (
        < div >
            <Count value={age} title='Age' />
            <Button setter={addAge} title='A +' />
            <Count value={salary} title='Salary' />
            <Button setter={addSal} title='S +' />
        </div >
    )
}
