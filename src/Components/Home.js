import React, { Component } from 'react'
import Experience from './Experience'
import Header from './Header'
import FeaturedProjects from './FeaturedProjects'
 import Services from './Services'
  
 
 
export default class Home extends Component {
    render() {
        return (
            <>
             <Header/> 
              <Services/>
             <Experience/>
             < FeaturedProjects/>
            </>
        )
    }
}


