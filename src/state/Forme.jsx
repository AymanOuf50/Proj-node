import React, { useState } from 'react'

export default function () {
    const [name,setname]=useState('')
    const [age,setage]=useState('')
    const [clien,setclien]=useState([])
    const handelname=(e)=>{
        const newname=e.target.value
        setname(newname)
    }
    const handelage=(e)=>{
        const newage=e.target.value
        setage(newage)
    }
    const submite=()=>{
        const cl={name,age}
        setclien([...clien,cl])
    }
  return (
    <> 
    <form>
        <input type="text" id='name' value={name} onChange={handelname} />
        <input type="number"id='age' value={age} onChange={handelage} />
        <button type="button" onClick={submite}>envoyer</button>
    </form>
    <div>
        <ul>
            {clien.map((cl,index)=>(
                <li key={index}>
                    `Name: {cl.name}   
                    Age: {cl.age}`
                </li>
            ))}
        </ul>
    </div>
    
    </>
  )
}
