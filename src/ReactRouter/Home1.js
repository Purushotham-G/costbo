import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home1 = () => {

  const navigate = useNavigate()
  return (
    <>
      <div><h2>Home page</h2></div>
      <button onClick={()=>navigate('order-summary' , {replace: true})}> place order</button>
    </>
  )
}
