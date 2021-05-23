import React from 'react'
import image from './ens.jpg';
function About() {
    return (
        <>
            <div className="container py-4 h-100vh">
                <div className="row d-flex justify-content-center align-items-center">
                   <div className="col-xs-9 col-md-12 col-lg-6 mb-4  bg-light">
                        <div>
                            <img src={image} alt="" />
                        </div>
                   </div>
                   <div className="col-xs-9 col-md-12 col-lg-6 mx-auto">
                       <h1 className="title">about me</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis, ducimus dolores beatae labore molestiae autem ad architecto, eligendi reprehenderit, harum molestias voluptatem recusandae vel cumque eaque sit. Ducimus non veniam sit inventore doloribus dignissimos a ad, omnis impedit recusandae ab expedita quidem vero eaque quod et minus, similique cum!</p>
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
