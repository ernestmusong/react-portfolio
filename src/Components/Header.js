import React from 'react'
import { Link} from "react-router-dom";
import image from './ens.jpg';
import { ButtonContainer } from "./Button";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";
const header =  {
     title: 'Hi, I\'m Ernest',
     description: 'A frontend developer',
      
 };

 const HeaderContent=(props) => {
     return(
         <div className="header">
         <div className="row header-inner">
         <div className="col-lg-6 bg">
             <div>
                 <h2>{props.title}</h2>
                 <p>{props.description}</p>
            </div>
            <Link to='/about'> 
            <ButtonContainer >
             read more
            </ButtonContainer >
          </Link>
            <div className="header-info">
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
          <a href="https://www.linkedin.com/in/musong-ernest-921b73211/" target="blank">
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
         <div className="col-lg-6 bg-light">
            <img src={image} alt="" />
         </div>
         </div>
         </div>

     )
 }
function Header() {
    return (
        <div>
           <HeaderContent title={header.title} description={header.description} image={image}/> 
        </div>
    )
}

export default Header


  