import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerHolder'>
        <div>
          <h2>Written by E-Cell BTU Team</h2>
          <p>We are fundamentally committed to innovation, quality, diversity, social responsibility, and lifelong learning.</p>
        </div>
        <div className="social">
          <div><a href='https://www.instagram.com/ecell_btu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><FaInstagram /></a></div>
          <div><a href='https://www.linkedin.com/company/e-cell-btu/'><FaLinkedin /></a></div>
          {/* <div><a href=''><FaTwitter/></a></div> */}
          {/* <div><a href=''><FaYoutube/></a></div> */}
          <div><a href='https://whatsapp.com/channel/0029Vamg242CcW4yBq9Qsm0C'><FaWhatsapp /></a></div>
        </div>
      </div>
    </div>
  )
}
