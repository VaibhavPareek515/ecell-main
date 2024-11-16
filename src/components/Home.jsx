import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Post } from './Post'
import { Loading } from './Loading'

export const Home = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)
    const getPosts = async()=> {
        await axios.get("https://ecellblog-server.onrender.com/allpost").then((res)=>{
            setPosts(res.data)
            setLoading(false)
        }).catch(err=>console.log(err))
    }
    
    useEffect(()=> {
        getPosts()
    },[])
  return (
    <div className='home'>
        <h1>Blogs</h1>

        {loading?<Loading/>:<div className='postHolder'>{posts.map((d,i)=>(
            <Post key={d._id} d={d}/>
        ))}</div>}
    </div>
  )
}
