import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PostApi1() {

    const [name, SetName] = useState("")
    const [id, SetId] = useState("")
    const [title, setTitle] = useState("")
    const [pass, SetPass] = useState("")
    const [email, setEmail] = useState("")

    const saveUser=(e)=>{
        e.preventDefault();
        let data = {name, id, title, pass, email}
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {data})
        .then((response)=>{
            console.log("response", response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>PostApi Method
        <h2>Post Api example</h2>
       Name :- <input type="text" value={name} onChange={(e)=>SetName(e.target.value)} name="name" /> <br /> <br />
       id :- <input type="text" value={id} onChange={(e)=>SetId(e.target.value)} name="id" /> <br /> <br />
       title:- <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title" /> <br /> <br />
       pass:- <input type="text" value={pass} onChange={(e)=>SetPass(e.target.value)} name="pass" /> <br /> <br />
       email:- <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" /> <br /> <br />
        <button type='button' onClick={saveUser}> save</button>
    </div>
  )
}

export default PostApi1