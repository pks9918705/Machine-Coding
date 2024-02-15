import React, { useEffect, useRef, useState } from 'react'

const App = () => {
   const [input,setInput]=useState("")
   const holdPrev=useRef('')
    
   
    useEffect(()=>{
        holdPrev.current = input
        console.log("ref ki value", holdPrev)
    },[input])
    return (
        <div>

            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}    />
           <h1>Current value: {input}</h1>
           <h1>Prev value: {holdPrev.current}</h1>


        </div>
    )
}

export default App
