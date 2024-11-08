import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [counter,setcounter]= useState(0)
    const plus=()=>{
        setcounter(counter +1)
    }
    const moin=()=>{
        setcounter(counter -1)
    }
    const reset=()=>{
        setcounter(0)
    }
    useEffect(()=>{
        alert('hee')
    },[]);
    // useEffect(()=>{
    //     console.log('ok')

    // },[counter])
return (
    <>
        <p>Couter : {counter} </p> 
        <button type="button" onClick={plus}>+</button>
        <button type="button" onClick={moin}>-</button>
        <button type="button" onClick={reset}>reset</button>
    </>
)
}
