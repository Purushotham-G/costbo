import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataTestApi() {

    
    const [brands, setBrands] = useState()

    useEffect(()=>{
        axios.get(`https://web.costbo.com/business-query-side/api/v1/business/getBrands`)
        .then((response)=>{
            console.log(response)
            setBrands(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
  return (
    <div>
        <h1>Test api</h1>
        {brands.businessName }
    </div>
  )
}


export default DataTestApi