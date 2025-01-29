import React from 'react'
import "./css/Team.css"
import Slider from "react-slick";
import team1 from "/images/team/team1.jpeg"
import team2 from "/images/team/team2.jpeg"
import team3 from "/images/team/team3.jpg"
import team4 from "/images/team/team4.jpeg"
import team5 from "/images/team/team5.jpeg"
import team6 from "/images/team/team6.jpeg"
import team7 from "/images/team/team7.jpeg"
import team8 from "/images/team/team8.jpeg"
import team9 from "/images/team/team9.jpg"
import team10 from "/images/team/team10.jpeg"
import team11 from "/images/team/team11.jpeg"
import team12 from "/images/team/team12.jpeg"
import team13 from "/images/team/team13.jpeg"
import team14 from "/images/team/team14.jpeg"
import team15 from "/images/team/team15.jpeg"
import team16 from "/images/team/team16.jpeg"
import team17 from "/images/team/team17.jpeg"
import team18 from "/images/team/team18.jpeg"

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';


export const Team = () => {

    const teamMembers = [
        { img: team16, name: "Dhananjay Rajput", role: "Designing Head" },
        { img: team15, name: "Aryan Rohila", role: "President" },
        { img: team7, name: "Viraj Tripathi", role: "Operation Head" },
        { img: team2, name: "Palak Yadav", role: "Marketing Head" },
        { img: team9, name: "Anita Kumari", role: "Marketing Head" },
        { img: team10, name: "Abhishek Acharya", role: "Management Head" },
        { img: team5, name: "Manshi Kumawat", role: "Social Media Head" },
        { img: team12, name: "Mudit Gahlot", role: "Media Head" },
        { img: team1, name: "Vaibhav Pareek", role: "Technical Head" },
        { img: team18, name: "Abhijeet Singh", role: "Media Head" },
        { img: team3, name: "Pranay Soni", role: "Technical Head" },
        { img: team13, name: "Preshita Mishra", role: "PR Head" },
        { img: team4, name: "Ekta Verma", role: "Management Head" },
        { img: team17, name: "Bhumika Rathore", role: "PR Head" },
        { img: team11, name: "Vasu", role: "Content Head" },
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        // autoplay:true,
        // speed:2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="teamSec" id='team'>
            <div className="memSlider section">
                <Slider {...settings}>

                    {teamMembers.map((a, i) => (
                        <div key={i} className="member">
                            <div className="memberHolder">
                                <img src={a.img} alt="" />
                                <h1>{a.name}</h1>
                                <p>{a.role}</p>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
            <div className="teamContent section">
                <h1>Our <b>Team.</b></h1>
                <p>
                    Our team is a dedicated and hardworking group of individuals, always striving for excellence in everything we do. With unwavering determination and a spirit of collaboration, we tackle challenges head-on and consistently deliver impactful results. Guided by our exceptional leader, AryanMan, whose vision and leadership inspire us every day, we are united in our mission to foster innovation and entrepreneurship.
                </p>
                <Link to="/team"><button>More <FaArrowRight /></button></Link>
            </div>
        </div>
    )
}


// <div className="member">
//                         <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//                         <h1>Vaibhav Pareek</h1>
//                         <p>Technical Head</p>
//                     </div>

//                     <div className="member">
//                         <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//                         <h1>Vaibhav Pareek</h1>
//                         <p>Technical Head</p>
//                     </div>

//                     <div className="member">
//                         <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//                         <h1>Vaibhav Pareek</h1>
//                         <p>Technical Head</p>
//                     </div>