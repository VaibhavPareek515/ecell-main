import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1><Link to="/">InnovateX</Link></h1>
        </div>
        <div>
            <div style={{fontSize:"2rem"}}><IoReorderThreeOutline/></div>
        </div>
    </div>
  )
}
