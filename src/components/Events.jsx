import React from 'react'
import "./css/Events.css"
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import event2 from "/images/event/event2.jpeg"
import event3 from "/images/event/event3.jpeg"
import event4 from "/images/event/event4.jpeg"
import event5 from "/images/event/event5.jpeg"
import event6 from "/images/event/event6.jpeg"
import event7 from "/images/event/event7.jpeg"

export const Events = () => {
    const eventImg = [event2, event3, event4, event5, event6, event7]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        speed:500,
        arrows: false
    };

    return (
        <div className="events" id='events'>
            <div className="eventHolder">
                <div className="eventSlider section">
                    <Slider {...settings}>

                        {eventImg.map((i,d) => (
                            <div key={d}>
                                <img src={i} alt="" />
                            </div>
                        ))}

                    </Slider>
                </div>
                <div className='section content'>
                    <h1>Our <b>Events.</b></h1>
                    <div className="EventContent">
                        <p>
                            Our team has successfully organized an impressive range of impactful events, both
                            online and offline, designed to foster creativity, collaboration, and meaningful
                            connections among participants. Each event reflects our commitment to creating
                            opportunities for learning, growth, and innovation.
                        </p>

                        <p>
                            With many more exciting initiatives and activities in the pipeline, we are determined
                            to continue inspiring and empowering our ever-growing community. Together, we aim to
                            build a vibrant and inclusive environment that supports personal and collective success.
                        </p>
                    </div>
                    {/* <Link to="/events"><button>More <FaArrowRight /></button></Link> */}
                </div>
            </div>
        </div>
    )
}
