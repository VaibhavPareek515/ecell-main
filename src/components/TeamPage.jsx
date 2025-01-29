import React from 'react'
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
import event1 from "/images/event/event1.jpeg"
import Faq from "react-faq-component";
import "./css/TeamPage.css"
import { MainFooter } from './MainFooter'
import { motion } from "framer-motion"

export const TeamPage = () => {

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

  const data = {
    title: "",
    rows: [
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>President</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team15} />
            </div>
            <p>Aryan Rohila, our exceptional Team Lead, is the driving force behind our success. With his visionary outlook and dynamic leadership skills, he ensures that every member of the team is motivated and aligned toward achieving our goals. Aryan’s ability to manage diverse challenges with clarity and his knack for fostering innovation inspire us to consistently give our best. Under his guidance, the team thrives in creativity, collaboration, and delivering impactful results. His dedication and enthusiasm set a high standard, making him not just a leader, but a true mentor and role model for us all.</p>
          </div>,
      },
      {
        title: <div style={{ display: 'flex', alignItems: "center" }}><h3>Operations Head</h3></div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team7} />
            </div>
            <p>Viraj Tripathi, our diligent Operations Head, is the backbone of our team’s seamless functionality. With his exceptional organizational skills and attention to detail, he ensures that every task is executed efficiently and on time. Viraj's proactive approach to problem-solving and his ability to manage complex operations make him an invaluable asset to our team. His calm demeanor and dedication inspire confidence, while his knack for streamlining processes keeps everything running smoothly. Always ready to go the extra mile, Viraj plays a crucial role in turning our ideas into reality with precision and excellence.</p>,
          </div>
      },
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>Marketing Head</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team2} />
              <img className='roleImg' src={team9} />
            </div>
            <p>Anita Yadav and Palak Yadav, our dynamic Marketing Heads, are the driving forces behind our team’s outreach and engagement. With their creative strategies and innovative ideas, they ensure that our initiatives reach the right audience and leave a lasting impact. Anita’s strategic thinking paired with Palak’s flair for communication creates a perfect synergy, making them an unstoppable duo in the world of marketing. Their passion for connecting with people, combined with their ability to adapt to new trends, ensures our presence is always vibrant and impactful. Together, they bring energy, creativity, and results to our marketing efforts.</p>,
          </div>
      },
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>Technical Head</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team1} />
              <img className='roleImg' src={team3} />
            </div>
            <p>Vaibhav Pareek and Pranay Soni, our brilliant Technical Heads, are the masterminds behind the technological backbone of our team. With their expertise in innovative tools and technologies, they ensure that all our technical needs are met with precision and efficiency. Vaibhav’s problem-solving abilities combined with Pranay’s forward-thinking approach make them a powerhouse duo in navigating the ever-evolving tech landscape. Whether it’s managing digital platforms, troubleshooting challenges, or implementing new tech solutions, they handle it all with dedication and skill. Their contributions are instrumental in keeping our operations smooth, modern, and cutting-edge.</p>,
          </div>
      },
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>Designer Head</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team16} />
            </div>
            <p>Dhananjay Singh, our talented Designer Head, is the creative genius behind the stunning visuals that represent our team. With a keen eye for detail and a passion for design, he transforms ideas into captivating graphics that leave a lasting impression. Dhananjay’s innovative approach to visual storytelling ensures that our content is not only appealing but also communicates our message effectively. His dedication to excellence and ability to bring creativity to life make him an indispensable part of our team. From event posters to digital campaigns, Dhananjay’s work consistently adds a unique and professional touch to everything we do.</p>,
          </div>
      },
      {
        title: <div style={{ display: 'flex', alignItems: "center" }}><h3>Management Head</h3></div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team10} />
              <img className='roleImg' src={team4} />
            </div>
            <p>Abhishek Acharya and Ekta Verma, our exceptional Management Heads, are the anchors that keep our team organized and efficient. With their outstanding coordination skills and strategic planning, they ensure that every task is executed seamlessly and on schedule. Abhishek’s systematic approach and ability to handle multiple responsibilities with ease complement Ekta’s resourcefulness and attention to detail, creating a perfect balance in managing our operations. Together, they excel at streamlining workflows, fostering collaboration, and maintaining a productive environment for the team. Their dedication and leadership are pivotal to the success of our events and initiatives.</p>,
          </div>
      },
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>Media Head</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team12} />
              <img className='roleImg' src={team18} />
            </div>
            <p>Mudit Ghalot and Abhijeet Singh, our Media Heads, are the dynamic duo responsible for amplifying our presence and ensuring our initiatives resonate with a wider audience. Mudit’s creativity and strategic thinking, paired with Abhijeet’s knack for storytelling and content creation, make them a powerful team in handling all things media. From capturing memorable moments to curating impactful campaigns, they excel at showcasing our team’s efforts in the best possible light. Their dedication to maintaining a strong and positive image of our team ensures we remain connected, visible, and impactful across all platforms.</p>,
          </div>
      },
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>Social Media Head</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team5} />
            </div>
            <p>Manshi Kumawat, our vibrant Social Media Head, is the creative force behind our engaging online presence. With her knack for understanding trends and connecting with audiences, she ensures our social media platforms are always lively and impactful. Manshi’s innovative approach to content curation, combined with her strategic planning, helps us reach a wider audience and maintain a strong digital footprint. From crafting captivating posts to managing interactions, she brings energy and creativity to every aspect of our social media strategy. Her dedication and passion make her an integral part of our team, ensuring our voice is heard loud and clear across platforms.</p>,
          </div>
      },
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>PR Head</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team13} />
              <img className='roleImg' src={team17} />
            </div>
            <p>Preshita Mishra and Bhumika Rathore, our proactive PR Heads, are the bridge between our team and the outside world. With their exceptional communication skills and engaging personalities, they excel at building strong relationships and fostering meaningful connections. Preshita’s strategic mindset and ability to craft impactful messages, combined with Bhumika’s creativity and rapport-building skills, ensure our team’s initiatives are well-represented and reach the right audience. Together, they work tirelessly to enhance our outreach, maintain our reputation, and ensure our presence is felt both within and beyond the campus. Their efforts are vital to the success and growth of our endeavors.</p>,
          </div>
      },
      {
        title:
          <div style={{ display: 'flex', alignItems: "center" }}>
            <h3 className='headTitle'>Content Head</h3>
          </div>,
        content:
          <div>
            <div className='roleImgHold'>
              <img className='roleImg' src={team11} />
            </div>
            <p>Vasu, our talented Content Head, is the voice behind our team’s impactful communication. With her exceptional writing skills and creative flair, she crafts compelling narratives that effectively convey our vision and initiatives. Whether it’s creating engaging event descriptions, insightful articles, or captivating social media posts, Vasu ensures that our message is clear, engaging, and resonates with our audience. Her dedication to delivering high-quality content and her ability to adapt her writing to various platforms make her an indispensable part of our team. Vasu’s work not only informs but also inspires, leaving a lasting impression on everyone who interacts with our content.</p>,
          </div>
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.div className='TeamPageMain' id='top'
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="TeamPage">
        <h1>Team Introduction</h1>
        <div className="imgHolder">
          <div>
            {teamMembers.map((a, i) => (
              <img src={a.img} alt="" className="teamImg" style={{ transform: `translateX(${-i * 10}px)` }} />
            ))}
          </div>
          {/* <div>
            <p>{teamMembers.length}</p>
          </div> */}
        </div>
        <img src={event1} alt="" className="ContentImg" />
        <p>
          We are a dynamic team of 15 dedicated members, each bringing unique skills and expertise to the table. Led by our visionary Team Lead, we are structured into specialized roles to ensure seamless functioning and impactful results. Our Operations Head ensures smooth execution of tasks, while the Marketing Head amplifies our reach and engagement. The Technical Head drives innovation, and the Designer Head crafts visuals that captivate. The Management Head keeps us organized, the Media Head enhances our presence, and the PR Head fosters strong connections. Finally, the Content Head ensures our message is clear and compelling. Together, we strive to inspire, innovate, and make a difference.
        </p>
        <div>
          <Faq
            data={data}
            styles={styles}
            config={config}
          />
        </div>
      </div>
      <MainFooter />
    </motion.div>
  )
}
