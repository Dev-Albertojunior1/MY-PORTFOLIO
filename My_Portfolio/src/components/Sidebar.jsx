// import React from 'react'
import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/me.jpeg";
import '../styles/components/sidebar.sass';



const Sidebar = () => {
  return (
   <aside id="sidebar">

    <img src={Avatar} alt="Alberto Junior" />
    <p className="title"> Developer</p>
    <SocialNetworks/>
    {/* <InformationContainer/> */}
    <a href="" className="btn">
        Download Curriculum
    </a>
   </aside>
  )
}

export default Sidebar