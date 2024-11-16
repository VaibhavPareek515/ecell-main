import React from 'react'
import {SyncLoader} from "react-spinners"

export const Loading = () => {
  return (
    <div style={{height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <SyncLoader/>
    </div>
  )
}
