import React, { Component } from 'react'
import Experience from './Experience'
import Header from './Header'
import FeaturedProjects from './FeaturedProjects'
 import Services from './Services'
 import Skills from './Skills'
  
 
 
export default class Home extends Component {
    render() {
        return (
            <>
             <Header/> 
              <Services/>
              <Skills/>
             <Experience/>
             < FeaturedProjects/>
            </>
        )
    }
}


