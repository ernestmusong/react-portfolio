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
            <div className="col-9 col-md-6 col-lg-4 mb-4 ">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <FaLaptopCode />
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >Web development</h6>
              <p>
              We design exclusive, world class, result oriented websites of all types that help your business stand out from the competition.
              </p>
            </div>
            <div className="col-9 col-md-6 col-lg-4 mb-4 ">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <MdPhonelink />
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >Responsive Design</h6>
              <p >
                We use  wordpress, and provide internet marketing and Search Engine
                Optimization that help to drive sales to your store.
              </p>
            </div>
            
            <div className="col-9 col-md-6 col-lg-4 mb-4 ">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <FaWordpress/>
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >wordpress</h6>
      
                <p>
              we implement digital marketint strategies to help you reach more and new customers online to increase sales and revenue for your business
              </p>
            </div>
            <div className="col-9 col-md-6 col-lg-4 mb-4 ">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <SiAdobephotoshop/>
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >Photoshop to html</h6>
              <p >
              we provide a range of graphic design services ranging from logo designs, brochures designs, visual identity design, signage,
              promotional items, leaflets, poster, custom invitations, book covers, social/digital media banners, personalized
              birthday cards, infographic, presentation templates, branding and much more.
              </p>
            </div>
             <div className="col-9 col-md-6 col-lg-4 mb-4 ">
              <IconContext.Provider value={{ style: { color: "var(--mainViolet)", fontSize: "2rem", marginBottom: "1rem"} }}>
                  <div>
                    <GoSearch/>
                  </div>
              </IconContext.Provider>
              <h6 className="text-dark text-uppercase " >seo</h6>
              <p >
              we provide a range of graphic design services ranging from logo designs, brochures designs, visual identity design, signage,
              promotional items, leaflets, poster, custom invitations, book covers, social/digital media banners, personalized
              birthday cards, infographic, presentation templates, branding and much more.
              </p>
            </div>
          </div>
        </div> 
    </section>
    
    )
}

export default Services
