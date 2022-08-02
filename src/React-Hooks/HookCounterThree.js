import React, { useState } from 'react'

function HookCounterThree() {
    /*
    const [name , setName] = useState({firstName : "", lastName : ""})

      const [dress ,setDress] =useState({middleName :' ', middleName1 :''})
      return(
        <div>
          <form>
            <input type="text" value={name.firstName} 
            onChange ={e => setName({...name, firstName: e.target.value})} />
            <input type="text" value={name.lastName} 
            onChange ={e => setName({...name, lastName: e.target.value})} />

            <h2>this is first name :- {name.firstName}</h2>
            <h2>this is last name :- {name.lastName} </h2>
            <h2>{JSON.stringify(name)}</h2>
          </form>

          <form>
              <input type="text" value={dress.middleName} 
              onChange= {e=>setDress({...dress, middleName: e.target.value})} />
              <input type="text" value={dress.middleName1} 
              onChange= {e=>setDress({...dress, middleName1: e.target.value})} />

              <h1>this is the middle :- {dress.middleName} </h1>
              <h1>this is the middle name 2 :- {dress.middleName1} </h1>
              <h1>{JSON.stringify(dress)}</h1>
          </form>

        </div>
      )
      
    
      
    
      const [name, setName] = useState({firstName :'', secondName :''})

      return(
        <div>
          <form>
            <input type="text" value={name.firstName} 
              onChange={e => setName({...name, firstName : e.target.value})}
            />
            <input type="text" value={name.secondName}
              onChange ={e => setName({...name, secondName: e.target.value})}
            />
            <h2>your first name is :- {name.firstName}</h2>
            <h2>your second name is :- {name.secondName}</h2>
            <h1>{JSON.stringify(name)}</h1>

          </form>
        </div>
      )
      */
        const [name, setName] = useState ({firstName:'', lastName:''})

        return(
          <div>
            <input type="text" value={name.firstName} onChange ={e => setName({...name, firstName : e.target.value})} />
            <input type="text" value={name.lastName} onChange ={e => setName({...name, lastName : e.target.value})} />

            <h2>your firstName is :- {name.firstName}</h2>
            <h2>your lastName is :- {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
          </div>
        )
      
     
    
    }
    

export default HookCounterThree