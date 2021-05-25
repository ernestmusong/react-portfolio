import React from 'react'
import { IconContext } from "react-icons";
import {FaLaptopCode } from "react-icons/fa";
import {MdPhonelink } from "react-icons/md";
import {FaWordpress} from "react-icons/fa";
import {SiAdobephotoshop} from "react-icons/si";
import {GoSearch} from "react-icons/go";
 

function Services() {
    return (
        <section className="home-sections" >
          <div className="container">
             <div className="row mb-4">
               <div className="col-lg-12 text-center mb-4">
                 <h2 className="title">services</h2>
                 <div className="underline"></div>
              </div>
             </div> 
           <div className="row">
            <div className="col-9 col-md-6 col-lg-4 mb-4 text-center mx-auto">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <FaLaptopCode />
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase mx-auto" >Web development</h6>
              <p>
              I design exclusive, world class, result oriented websites of all types that help your business stand out from the competition.<br/>
              HTML, CSS, Bootstrap JavaScript, React, PostgreSQL, Wordpress, SEO.
              </p>
            </div>
            <div className="col-9 col-md-6 col-lg-4 mb-4 text-center mx-auto">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <MdPhonelink />
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >Responsive Design</h6>
              <p >
                Make your website awesome on all devices (phone, tablet, desktop) and improve user experience. 
              </p>
            </div>
            
            <div className="col-9 col-md-6 col-lg-4 mb-4 text-center mx-auto">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <FaWordpress/>
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >wordpress</h6>
      
                <p>
              WordPress is the simplest, most popular way to create a website or blog. In fact, WordPress powers over 40.0% of all the websites on the Internet. 
              Yours can't be different.
              </p>
            </div>
            <div className="col-9 col-md-6 col-lg-4 mb-4 text-center mx-auto">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <SiAdobephotoshop/>
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >Photoshop to html</h6>
              <p >
              Do you have an awesome looking website designed in Photoshop and wondering how to get it up and running on the internet?
              Worry no more because I got you covered.
              </p>
            </div>
             <div className="col-9 col-md-6 col-lg-4 mb-4 text-center mx-auto">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <GoSearch/>
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >seo</h6>
              <p >
              Increase your business visibility on the internet, rank
               your website on google, bing etc..., get more traffic, increase conversions, name it.

              </p>
            </div>
          </div>
        </div> 
    </section>
    
    )
}

export default Services
