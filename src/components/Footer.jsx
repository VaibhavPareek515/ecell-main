import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerHolder'>
        <div>
            <h2>Written by E-Cell BTU Team</h2>
            <p>We are fundamentally committed to innovation, quality, diversity, social responsibility, and lifelong learning.</p>
        </div>
        <div className="social">
            <FaInstagram/>
            <BsTwitterX/>
            <FaWhatsapp/>
            <FaLinkedin/>
            <FaYoutube/>
        </div>
      </div>
    </div>
  )
}
