// import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import {Link} from 'react-router-dom'
import './Home.css'
import {FaDonate, FaCode, FaRobot, FaVideo, FaQuestion, FaQuestionCircle} from 'react-icons/fa' 

function Home(props) {
  // console.log(props.user._json.name)
  
  return (
    <div>
      <div className="hero-image">
      <Navbar profile={props.user?props.user._json.picture:"https://cdn-icons-png.flaticon.com/128/3177/3177440.png"} name = {props.user?props.user._json.name:""}/>
        <div className="grid-container">
          <Link to='/ide' className="grid-item"><div>
            <div><FaCode  style={{'height':'150px'}}/></div>Playground</div></Link>
          <Link to='/chatbot' className="grid-item">
            <div><FaRobot  style={{'height':'150px'}}/></div>Chatbot</Link>
            <Link to='/quiz' className="grid-item"><div>
           <div><FaQuestion  style={{'height':'150px'}}/></div>Quiz</div></Link>
          <Link to='/selection' className="grid-item">
            <div><FaDonate style={{'height':'150px'}}/></div><div >Donations</div></Link>
          <Link to='/video' className="grid-item"><div >
            <div><FaVideo  style={{'height':'150px'}}/></div>Video/Resources</div></Link>
          <div className="grid-item">
            <div><FaQuestionCircle  style={{'height':'150px'}}/></div>FAQs</div>
        </div>
      </div>
    </div>
  

  )
}

export default Home
