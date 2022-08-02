import { Grid, Typography } from '@mui/material'
import { Button} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function ThirdApi() {

    const [details, setDetails] = useState([])
    const [posts , setPost] = useState()
    const inputRef = useRef(null)
    let count = 0
    let set = 0

    useEffect(() => {
        axios.get(`https://web.costbo.com/business-query-side/api/v1/business/getBrands`)
            .then((resp) => {
                console.log(resp)
                setDetails(resp.data?.details)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((result)=>{
            console.log("result",result)
            setPost(result.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    useEffect(() => {
        //Focus the input element
        inputRef.current.focus()
    }, [])

    return (
        <>

            <h1 style={{ display: "flex", textAlign: "center", justifyContent: "center", marginTop: "25px", fontSize: "100px", backgroundColor: "orange" }}>CostBO</h1>
            <div>
                <input type="text" ref={inputRef} placeholder="search products" />
                <button type="button">search</button>
            </div>
            <div style={{ backgroundColor: "skyBlue", margin: "0px 400px" }}>
                <p> <h1>Simplified, Managed <br /><strong>Direct to Consumer (D2C) </strong>eCommerce <br />for Brands and Manufacturers</h1></p>
            </div>
            <div>
                <div className='logo'>

                    <img src="" />
                </div>

            </div>
            <div style={{ backgroundColor: "yellow" }}>
                {
                    details?.map((detail) => detail?.brands?.map((brand, index) => {
                        count = count + 1
                        if (count > 7) return
                        
                        return <Typography style={{display:"inline-block"}}>
                            <img src={brand?.brandLogo} height="90px" style={{ margin: "20px", borderRadius: "50%" }} ></img>
                            <h3>{brand?.businessName}</h3>
                        </Typography>   
                    }
                    ))
                }
            </div>
            <div>
                <h2>Second Api - using get method in one Component</h2>
                {
                    posts?.map((post, index)=>{
                        set = set +1
                        if(set < 5)
                        return <p>{post?.id}</p>
                    })
                }
            </div>
            <div>
            
            <Button variant='text'> text</Button>
            <Button variant='contained'> contained</Button>
            <Button variant='outlined'> outlined</Button>
             

             </ div>

        </>
    )
}

export default ThirdApi