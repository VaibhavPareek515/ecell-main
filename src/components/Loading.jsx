import React from 'react'
import {SyncLoader} from "react-spinners"

export const Loading = () => {
  return (
    <div style={{height:"90vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <SyncLoader/>
        <p style={{padding:"20px",fontSize:".7rem"}}>(you make good outlines ~someone)</p>
    </div>
  )
}
