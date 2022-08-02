import axios from 'axios'
import React, { useEffect, useState } from 'react'


function DataFetching11() {
 
    const [post , setPost] = useState({})
    const [id , setId] = useState(1)

    useEffect (()=>{

        axios.get(`https://jsonplaceholder.typicode.com/posts ${id}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [id])

  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <div>
            {post.id} --{post.title}
        </div>
    </div>
  )
}

export default DataFetching11