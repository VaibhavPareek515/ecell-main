import React from 'react'
import "./css/MainFooter.css"
import logo from "../assets/logoB.svg"
import { FaArrowRightLong, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const MainFooter = () => {
  return (
    <div className="mainFooter" id='contact'>
      <div className="mainFHold">
        <div>
          <div className="tag">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>E-Cell Team</div>
          </div>
          <p>Feel free to reach out to us through our official social media channels or email for any queries or collaboration opportunities.</p>
        </div>

        <div className='social'>
          <div><a href='https://www.instagram.com/ecell_btu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><FaInstagram/></a></div>
          <div><a href='https://www.linkedin.com/company/e-cell-btu/'><FaLinkedin/></a></div>
          {/* <div><a href=''><FaTwitter/></a></div> */}
          {/* <div><a href=''><FaYoutube/></a></div> */}
          <div><a href='https://whatsapp.com/channel/0029Vamg242CcW4yBq9Qsm0C'><FaWhatsapp/></a></div>
        </div>
      </div>
      <div className="mailSec">
        <h1>Mail Us</h1>
        <div className='holder'>
          <input type="text" placeholder='Enter your email' />
          <button><FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  )
}
