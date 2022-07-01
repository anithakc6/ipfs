import React from 'react'
import { Button } from 'antd';
import { ipfsFetch } from '../../ethereumFunctions.jsx'

export default function Home() {
  return (
    <div>
       <Button type="primary" onClick={() => ipfsFetch()}>IPFS</Button>
    </div>
  )
}
