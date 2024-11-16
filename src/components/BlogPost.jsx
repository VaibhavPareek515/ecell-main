import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react'
import parser from "html-react-parser"
import { useState } from 'react'
import { Footer } from './Footer'
import { FaRegShareSquare } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from './Loading'

export const BlogPost = () => {
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const [content,setContent] = useState("")
    const [copySuccess, setCopySuccess] = useState("")
    const notify = () => toast.success("Copied to Clipboard!",{
        position:"bottom-center",
    });
    
    const textAreaRef = useRef(null)

    async function copyToClip() {
        await navigator.clipboard.writeText(location.href);
        setCopySuccess("Copied");
        notify()
    }

    const getBlog = async()=> {
        await axios.post("https://ecellblog-server.onrender.com/singlepost",{id:id}).then((res)=> {
            setContent(res.data.content)
        }).catch(err=>console.log(err)).finally(()=>{
            setLoading(false)
        })
    }

    useEffect(()=> {
        getBlog()
    },[])
  return (
    <>
    <div className='blog'>
        <ToastContainer/>
        {loading?<Loading/>:
        <div className="blogHolder">
            <FaRegShareSquare onClick={copyToClip} className='sharebtn'/>
            <div className='blogCon'>{parser(content)}</div>
        </div>
    }
    </div>
        <Footer/>
    </>
  )
}
