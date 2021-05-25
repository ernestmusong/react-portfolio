import React, { Component } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid footer-bg py-4">
                <div className="row w-80">
                    {/*footer first child*/}
                    <div className=" mr-4">
                         <a href="https://web.facebook.com/musong.ernestakeh/" target="blank"className="text-light">
                            <FaFacebook/>
                        </a>
                    </div>
                    <div className="mr-4">
                         <a href="https://github.com/ernestmusong" target="blank"className="text-light">
                           <FaGithub/>
                        </a>
                    </div>
                     <div  className=" mr-4">
                         <a href="https://www.linkedin.com/feed/" target="blank"className="text-light">
                           <FaLinkedin/>
                         </a>
                    </div>
                    <div  >
                            <a href="mailto: mailto:ernestakeh@gmail.com " target="blank" className="text-light">
                           <FaEnvelopeOpen/>
                            </a>
                    </div>
               </div>
                {/*footer second child*/}
                <div className="row d-flex flex-column justify-content-around align-items-center">
                   <div  >
                      <p className="nav-and-footer-p">
                        Copyright &copy; <span className="text-primary">Musong Ernest</span>  <span id="date">2020</span><span className="nav-and-footer-p ml-2">All rights reserved</span>
                        
                     </p>
                  </div>
                    <div>
                       <p  className="nav-and-footer-p text-center">powered by <span className="text-primary">React</span> </p>
                   </div>
       
      </div>
            </div>
        )
    }
}
