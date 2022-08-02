import axios from 'axios'
import React, { useState, useEffect } from 'react'

function SecondApi() {

    const [businessInfo, setBusinessInfo] = useState([])

    useEffect(()=>{
        axios.get(`https://web.costbo.com/business-query-side/api/v1/business/getBusinessInfo?params=559b449853a1480285b2110ad42e5d7c&params=a23fca080dfa40798955059704ff0a36&params=ce7d9b55fab04b688d5c0626809c8089&params=d8481246646b4d2d9983d2f0ff892b3c&params=599d8ab3f82a4dd89c5b5505658d636d&params=1ed335f2d9d8440292ebe57aeca28f48&params=320a8e0191d24ad78ba8fe5db13943d3&params=2aaf4526700b4e52b6954b0db7f5409e&params=a2908c3dd2d74dcd95463059a7f094f6&params=b6fd7951184e41318936c68d4646e28b&params=536efe8f78cd45538f1a8b7d333f91fd&params=d33d634ab10944bbae9ed614cc8a18a0&params=e2e37fd7d5f7452ba45e0ddcde66c0b8&params=9ffb95f233a54a2e92fe4ffd7887919b&params=3f9563d6889942bc81ce7e9b93075d97&params=1fb5da9262c9495abc4222e6053e3899&params=f12b262df8df4af69c86178ac19c52e9&params=2019fc2966ec4683a74daab47876eb1a&params=5cc84026fd574f9a93b5965e6eb88004&params=317a4c329b324c80810f2817dc6497a6`)
        .then((resp)=>{
            console.log(resp)
            setBusinessInfo(resp.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
  return (
    <div>
        <h1>hello world
            {/* {JSON.stringify(businessInfo)} */}
            {businessInfo?.businessInfo?.map((business)=>business.businessName)}
        </h1>
    </div>
  )
}

export default SecondApi