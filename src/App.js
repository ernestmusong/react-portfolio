import Home from './Components/Home';
import Navbar from './Components/Navbar'
import About from './Components/About';
import AllProjects from './Components/AllProjects';
import Cascading from './Components/Cascading';
import WordPress from './Components/WordPress';
import JavaScript from './Components/JavaScript';
import React from './Components/ReactProjects';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Footer from './Components/Footer';
import Mockups from './Components/Mockups';
import './App.css';
import { Switch,Route} from "react-router-dom";
import ReactProjects from './Components/ReactProjects';
function App() {
  return (
    <>
     <Navbar/>
    <Switch>
     <Route exact path="/">
           <Home/>
          </Route>
        <Route path="/about">
            <About />
          </Route>
        <Route path="/projects">
           <AllProjects/>
          </Route>
         <Route path="/contact">
          <Contact/>
          </Route>
          <Route path="/react">
          <ReactProjects/>
          </Route>
          <Route path="/wordpress">
          <WordPress/>
          </Route>
          <Route path="/javascript">
          <JavaScript/>
          </Route>
           <Route path="/css">
          <Cascading/>
          </Route>
          <Route path="/mockups">
          <Mockups/>
          </Route>
           <Route path="*">
         <Error/>
          </Route>
          </Switch>
           <Footer/>
          
    </>
  );
}

export default App;
