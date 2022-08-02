import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function UsersData() {

    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get(`https://web.costbo.com/business-query-side/api/v1/business/getBrands`)
            .then((res) => {
                console.log(res)
                setDetails(res.data?.details)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <>

            <table border="1" style={{borderCollapse:"collapse"}}>
                <tr style={{fontSize:"30px"}} >
                    <th style={{padding:"20px"}}>Name</th>
                    <th>Image</th>
                    <th>BrandName</th>
                </tr>
                {details?.map((detail) => detail?.brands?.map((brand) => <tr>
                    <td>{brand?.productMainCategory?.[0]?.name || brand?.productMainCategory?.[0]?.value}</td>
                    <td style={{backgroundColor:"yellow"}}><img src={brand?.brandLogo} height= "80px" style={{margin:"50px" , borderRadius:"50%"}} /></td>
                    <td> <a href='https://costbo.com/' target="_blank">{brand?.linkURL}</a></td>
                </tr>))}

            </table>
            <h2>React Fetch API Example</h2>
            {/* <h5>{JSON.stringify(details)}</h5> */}

            {
                details?.map((detail) =>
                    detail?.brands?.map((brand, i) =>
                        <img src={brand?.brandLogo} height='50px' style={{ margin: "10px" }} />))
            }
            {
                details?.map((detail) =>
                    detail?.brands?.map((brand) =>
                        <h2>name:{brand?.productMainCategory?.[0]?.name}</h2>))
            }
            {/* <ul>
                {brands.name}-- {brands.brandLogo}
            </ul> */}
        </>
    )
}