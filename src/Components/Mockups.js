import React from 'react'
import {projectList} from './Data';

function Mockups () {
    return (
        
        <div className="container">
            <div className="row mb-4">
               <div className="col-lg-12 text-center mb-4 py-4">
                 <h2 className="title">Mockups To Html</h2>
                 <div className="underline"></div>
              </div>
             </div>
           <div className="row d-flex  justify-content-around mx-auto">
                 {projectList.filter(project =>project.mockup).map(filteredProject => (
                  <div className="col-xs-9 col-md-6 col-lg-4 my-2 training-box "  data-aos="fade-up"  data-aos-duration="1000"  data-aos-easing="ease">
             
                  <img
                    src={filteredProject.img}
                    alt={filteredProject.alternative} className="box-image img-fluid"/>
                  <div className="overlay">
                      <div className="box-title">{filteredProject.title}</div>
                </div>
                 
                  <a href={filteredProject.link} className="btn box-button" target="blank">read more</a>
                  
                </div>
                ))}
           </div>
        </div> 
        
    )
}

export default Mockups
