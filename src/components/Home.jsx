import React, { useRef } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Post } from './Post'
import { Loading } from './Loading'
import { About } from './About'
import { Hero } from './Hero'
import locomotiveScroll from "locomotive-scroll";
import { Team } from './Team'
import { Events } from './Events'
import { MainFooter } from './MainFooter'
import { motion } from "framer-motion"
import "./css/Home.css"



export const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const getPosts = async () => {
        await axios.get("https://ecellblog-server.onrender.com/allpost").then((res) => {
            setPosts(res.data)
            setLoading(false)
        }).catch(err => console.log(err))
    }

    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };


    useEffect(() => {
        getPosts()
    }, [])

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <Events />
            <Team />

            <div className='home' id='blogs'>
                <div className='blogy'>
                    <h1>Our <b>Blogs.</b></h1>
                    {loading ? <Loading /> : <div className='postHolder'>{posts.toReversed().map((d, i) => (
                        <Post key={d._id} d={d} />
                    ))}</div>}
                </div>
            </div>

            <MainFooter />
        </motion.div>
    )
}
