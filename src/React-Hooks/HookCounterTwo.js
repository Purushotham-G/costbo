
import React, { useState } from 'react'


function HookCounterTwo() {

  /*
  const initialCounter = 0
  const [count, setCount]= useState(initialCounter)

  const [num, setNum] = useState(initialCounter)

  const IncrementFive =() =>{
      for(let i=0 ;i<5 ; i++)
      setCount(precCount => precCount +1)
  }

  const IncrementTen =() =>{
    for(let i=0; i<10 ;i++)
    setNum(presNum => presNum + 1)
  }
  

return (
  <div>
      Count : {count}
      <button onClick={() => setCount(initialCounter)}>reset</button>
      <button onClick={() => setCount(precCount => precCount + 1)}>increment </button>
      <button onClick={IncrementFive}>increment 5</button>
      <ul>
        Number: {num}
        <button onClick={()=>setNum(initialCounter)}>reset</button>
        <button onClick={()=>setNum(presNum => presNum +1)}>increment</button>
      <button onClick={IncrementTen}>increment 10's</button>
      </ul>
  </div>
  
)

*/

  const initialCounter = 0
  const [count, setCount] = useState(initialCounter)
  
  const n = 100
  const Increment=()=>{
    for(let i=0 ; i<n ;i++)
    setCount(incre => incre +1)
  }

  return(
    <div>
      Count : {count}
      <button onClick={()=>setCount(initialCounter)}>Reset</button>
      <button onClick={()=>setCount(incre => incre +1)}>increment</button>
      <button onClick={Increment}>increment 5 </button>
    </div>
  )
}

export default HookCounterTwo