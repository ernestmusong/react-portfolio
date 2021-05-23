import React from 'react'
import { Link} from "react-router-dom";
import {FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";
function Navbar() {
    return (
        <>
        <div id="big-nav">
            <div className="contact-links">
        <div className="left">
        <p ><FaMapMarkerAlt/><span className="ml-2">Cameroon.</span></p>
        <p className="mr-2" ><FaPhoneAlt/><span className="ml-2">+237676308067</span></p>
        </div>
        
        <div className="right">
          <a href="https://web.facebook.com/musong.ernestakeh/" target="blank">
            <button type="button" className="btn">
              <FaFacebook/>
            </button>
          </a>
          <a href="https://github.com/ernestmusong" target="blank">
            <button type="button" className="btn">
              <FaGithub/>
            </button>
          </a>
          <a href="https://www.linkedin.com/feed/" target="blank">
            <button type="button" className="btn">
              <FaLinkedin/>
            </button>
          </a>
          <a href="mailto: mailto:ernestakeh@gmail.com " target="blank">
            <button type="button" className="btn">
              <FaEnvelopeOpen/>
            </button>
          </a>
           
        </div>
     </div>
          <nav className="navbar navbar-expand-md navbar-dark" id="nav">
              <Link to="/" className="navbar-brand">
   <FaChevronLeft/><span>Musong Ernest</span><span><FaChevronRight/></span>
      </Link>
      <button
        className="navbar-toggler bg-dark"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/"className="nav-link">
             Home
            </Link>
            </li>
            <li className="nav-item ">
            <Link to="/about" className="nav-link">
             About
            </Link>
            </li>
            <li className="nav-item ">
            <Link to="/projects" className="nav-link">
             Projects
            </Link>
            </li>
           </ul>
      </div>
    </nav> 
    </div>
    </>
    )
}

export default Navbar
