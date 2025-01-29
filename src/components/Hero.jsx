import React, { Suspense } from 'react'
import { FaHandPeace,FaLightbulb} from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import "../components/css/Hero.css"
import hero from "/images/hero/running.gif"
// "https://64.media.tumblr.com/e411db3a2acdee8cd039b808e76d55e4/tumblr_poxm9ulEUu1tka7tlo1_500.gif"
export const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className="heroHolder">
                    <div className="mainLine">
                        <div>
                            <h1>Ignite</h1>
                            <div className='imgHolder'><img src={hero} alt=""/></div>
                        </div>
                        <div>
                            <h1>ideas,</h1>
                            <h1>Inspire</h1>
                        </div>
                        <div>
                            {/* <h1>Inspire</h1> */}
                            <div className='iconHolder'>
                                <div className='icons'><FaHandPeace /></div>
                                <div className='icons'><FaHammer /></div>
                            </div>
                            <h1>innovation.</h1>
                        </div>
                    </div>
                    <div className="secondLine">
                        <p id='line'>
                        We are a passionate team fostering entrepreneurship, organizing impactful events, and empowering students to innovate and lead.
                        </p>
                    </div>
                    <div className='btnSec'>
                        <button><FaLightbulb/>Know More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
