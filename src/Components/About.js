import React from 'react'
import image from './ens.jpg';
function About() {
    return (
        <>
            <div className="container py-4 h-100vh">
                <div className="row d-flex justify-content-center align-items-center">
                   <div className=" col-lg-3 mb-4  bg-light">
                        <div>
                            <img src={image} alt="" />
                        </div>
                   </div>
                   <div className="col mx-auto">
                       <h1 className="title text-capitalize text-bold">about me</h1>
                       <p>I am a self-taught web developer with a high school 
                           deploma in Economics and mathematics. It all started 
                           in 2019 when a friend of mine introduced me to web 
                           development. I started from scratch by asking Google 
                           "what is web development?". From there, I found a link 
                           to <a className="text-decoratio-none mx-1" href="https://www.w3schools.com/" target="blank">W3Schools</a> 
                            where I began learning HTML. Progressively I jumped 
                            into CSS and began learning CSS. My friend then introduced me to  
                             <a className="text-decoratio-none mx-1" href="https://www.freecodecamp.org/" target="blank">freeCodeCamp</a> 
                             where I started their responsive web design course. I watched a lot of video tutorials and practised by 
                             building projects on my own from simple to complex projects. CSS now became my bestfriend untill I obtained 
                             the freeCodeCamp 
                             <a className="text-decoratio-none mx-1" href="https://www.freecodecamp.org/certification/fcc39e5ad89-2400-452f-a99d-97fa4b579dc2/responsive-web-design" target="blank">Responsive Web Design</a> 
                             Certification.
                             Then I jumped into javascript. I must say I'm grateful to 
                             <a className="text-decoratio-none mx-1" href="https://www.freecodecamp.org/" target="blank">FreeCodeCamp</a> 
                             and <a className="text-decoratio-none mx-1" href="https://www.johnsmilga.com/" target="blank">John Smilga</a> 
                             (Coding Addict). These two are behind my success in the javaScript
                             world. Then I grabed the freeCodeCamp <a className="text-decoratio-none mx-1" href="https://www.freecodecamp.org/certification/fcc39e5ad89-2400-452f-a99d-97fa4b579dc2/javascript-algorithms-and-data-structures" target="blank">JavaScript Algorithms and Data Structures</a> 
                              Certification. I continued practicing by building projects and became comfortable with JavaScript. 
                              Now it was time to choose a JavaScript library and I picked React. I learned React 
                              and finally obtained the freeCodeCamp 
                               <a className="text-decoratio-none mx-1" href="https://www.freecodecamp.org/certification/fcc39e5ad89-2400-452f-a99d-97fa4b579dc2/front-end-libraries" target="blank">Front End Libraries</a>.
                                I continued learning and did a lot of practice with
                              <a className="text-decoratio-none mx-1" href="https://www.youtube.com/watch?v=iZhV0bILFb0&list=PLnHJACx3NwAe-GJ4GfptzUs8g7lFhE9DV" target="blank">John Smilga React Tutorials.</a>
                              
                               certification. I then decided to learn WordPress and started making some money building websites using wordpress 
                               and today I trained people in front end web development in Cameroon.
                         </p>
                       <div className="d-flex justify-content-start align-items-center flex-wrap">
                           <div className="px-1 text-muted" style={{ backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                               html
                           </div>
                           <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                            css
                           </div>
                           <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                              bootstrap
                           </div>
                             <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                              wordpress
                           </div>
                             <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                              javascript
                           </div>
                             <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                              react
                           </div>
                             <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                              git
                           </div>
                            <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                              database
                           </div>
                             <div className="px-1 text-muted" style={{  backgroundColor: "lightGrey", borderRadius:"4px", textAlign: "center", margin:"1px"}}>
                              seo
                           </div>
                           
                       </div>
                   </div>
                </div>
            </div> 
        </>
    )
}

export default About
