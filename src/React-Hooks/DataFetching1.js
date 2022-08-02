import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching1() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick =() =>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response =>{
            console.log(response)
            setPost(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [idFromButtonClick] )

  return (
    <div>DataFetching1

        <input type ="text" value={id} onChange ={e => setId (e.target.value)} />
        <button type="button" onClick = {handleClick}>fetch post</button>
        <div>{post.id} --{post.title}</div>
        {/*
        <ul>
            {console.log(posts)}
            {posts.map(post => (<li key = {post.id}>{post.title} </li>))}
        </ul>
         */}
        
    </div>
  )
}

export default DataFetching1