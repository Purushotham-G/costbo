import React, { useState } from 'react'

function HookCounter() {

  /*
    const [count, setCount ]= useState(0)
  return (
    <div>
        <button onClick= {()=>setCount (count+1)}> Count {count} </button>
    </div>
  )
  */

  const initial = 0
  const [count, setCount]= useState(initial)
  return(
    <div>
      <button onClick={()=> setCount(initial)}>Reset</button>
      <button onClick={()=> setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter