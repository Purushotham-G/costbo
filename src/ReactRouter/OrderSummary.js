import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {

    const navigate = useNavigate()
  return (
    <>
        <div><h2>Order confirmed !</h2></div>
        <button onClick={()=>navigate(-1)}>Go Back</button>
    
    </>
  )
}
