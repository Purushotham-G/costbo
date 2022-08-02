import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [secondName, bindSecondName, resetSecondName] =useInput('')

    const submitHandler = e =>{
        e.preventDefault()
        alert(`hello ${firstName} ${secondName}`)
        resetFirstName()
        resetSecondName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>FirstName:-</label>
                <input type="text" 
                    {...bindFirstName}
            />
            </div>
            <div>
                <label>SecondName:-</label>
                <input type="text" 
                    {...bindSecondName}
                />
            </div>
            <button>submit</button>
        </form>

    </div>
  )
}

export default UserForm