// import React from 'react'
import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/me.jpeg";
import PDF from "../img/Albert-CV.pdf";
import '../styles/components/sidebar.sass';
import Information from "./Information";


const Sidebar = () => {
  return (
   <aside id="sidebar">

    <img src={Avatar} alt="Alberto Junior" />
    <p className="title">Software Engineer</p>
    <SocialNetworks/>
    <Information/>
    <a href={PDF} className="btn">
        Download Curriculum
    </a>
   </aside>
  )
}

export default Sidebar