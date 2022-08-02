import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FirstApi() {

    const [topSearches, setTopSearches] = useState()

    useEffect(()=>{
        axios.get(`https://web.costbo.com/searchinfo-query-side/api/v1/searchinfo/topSearches`)
        .then((response)=>{
            console.log(response)
            setTopSearches(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <div >
        <div style={{display:"flex", margin:"5px" }}>   
            {topSearches?.topRecommendedSearch?.map((topRecommendedSearch)=><h2 >{topRecommendedSearch?.searchText}</h2>)}
        </div>
        
        {topSearches?.topSearches?.map((topSearch)=><h2>{topSearch}</h2>)}
    </div>
  )
}

export default FirstApi