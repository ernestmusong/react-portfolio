import React from 'react'
import {projectList} from './Data';
import { ButtonContainer } from "./Button";
import { Link} from "react-router-dom";
function FeaturedProjects() {
    return (
        <section className="home-sections" >
            
          <div className="container">
             <div className="row mb-4">
               <div className="col-lg-12 text-center mb-4">
                 <h2 className="title">Project Categories</h2>
                 <div className="underline"></div>
              </div>
             </div> 
             <div className="row  d-flex  justify-content-around mb-4">
                 {projectList.filter(project => project.featured).map(filteredProject => (
                  <div className="col-xs-9 col-md-6 col-lg-4 my-2 training-box"  data-aos="fade-up"  data-aos-duration="1000"  data-aos-easing="ease">
             
                  <img
                    src={filteredProject.img}
                    alt={filteredProject.altetnative} className="box-image"/>
                  <div className="overlay">
                      <div className="box-title">{filteredProject.title}</div>
                </div>
                 
                  <Link to= {filteredProject.slug} className="btn box-button">read more</Link>
                  
                </div>
                ))}
             </div>
             <div className="row mb-4">
                 <div className="col-12 mx-auto text-center">
                     <Link to='/projects'>
                      <ButtonContainer >
                        all projects
                     </ButtonContainer >
                     </Link>
                    
                 </div>

             </div>
        </div> 
         
    </section>
    
    )
}



export default FeaturedProjects
