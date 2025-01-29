import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom"
import logo from "../assets/logoB.svg"
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [isMenu,setIsMenu] = useState(false)

  return (
    <div className='navbar'>
      <Link to="/">
        <div className='logoH'>
          <div>
          <img src={logo} alt="" />
          </div>
          <h1>ecell</h1>
        </div>
      </Link>

      {/* <div className='links'>
        <ul>
          <li>About</li>
          <li>Events</li>
          <li>Team</li>
          <li>Blogs</li>
        </ul>
      </div> */}

      <div className='btn'>
        <button onClick={()=>setIsMenu(true)}>Menu</button>
      </div>

      <div className='menu' style={{transform:isMenu?"translateX(0%)":"translateX(-100%)"}}>
        <button id='cross' onClick={()=>setIsMenu(false)}><IoClose id='ro'/></button>
        <ul>
          <li><Link to="/" onClick={()=>setIsMenu(false)}>Home</Link><div className='line'></div></li>
          <li><a href="#about" onClick={()=>setIsMenu(false)}>About</a><div className='line'></div></li>
          <li><a href="#events" onClick={()=>setIsMenu(false)}>Events</a><div className='line'></div></li>
          <li><a href="#team" onClick={()=>setIsMenu(false)}>Team</a><div className='line'></div></li>
          <li><a href="#blogs" onClick={()=>setIsMenu(false)}>Blogs</a><div className='line'></div></li>
          <li><a href="#contact" onClick={()=>setIsMenu(false)}>Contact</a><div className='line'></div></li>
        </ul>
      </div>
    </div>
  )
}



// <div><Link>About</Link></div>
// <div><Link>Events</Link></div>
// <div><Link>Blogs</Link></div>
// <div><Link>Our Team</Link></div>