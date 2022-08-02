import React, { useState } from 'react'

function HookCounterFour() {
/*
    const [items, setItems] = useState([])

    const addItem=()=>{
        setItems([...items, {
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>

        <button onClick={addItem}>Add a number</button>
        <ul>
            {items.map(item =>(<li key={item.id}>{item.value}</li>) )}
        </ul>
    </div>
  )
 

  const [items, setItems]= useState([])

  const addItem =()=>{
      setItems([...items, {
          id : items.length,
          value : Math.floor(Math.random() *10) +1
      }])
  }

  return(
      <div>
          <button onClick={addItem}>add a number</button>
          <ul>
              {items.map(item =>(
                  <li key={item.id}>{item.value} </li>
              ))
              }
          </ul>
      </div>
  )
   */


  const [shops, setShop] = useState ([])

  const addItem = ()=>{
      setShop([...shops, {
          id : shops.length,
          value : Math.floor(Math.random() * 10 ) + 1
      }])
  }
  return(
      <div>
          <button onClick={addItem}>no. of items</button>
          <ul>
              total items
              {shops.map(shop =>(
                  <li key = {shop.id}> {shop.value} </li>
              ))}

          </ul>
      </div>
  )
}

export default HookCounterFour