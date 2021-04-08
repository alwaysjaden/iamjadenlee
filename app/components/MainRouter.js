import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Main from "./Main";
import Contact from "./Contactme";
import Aboutme from "./Aboutme";
import Portfolio from './Portfolio'

export default class MainRouter extends Component {
 

  render() {
    return (
      <Router>
      	<Switch>
          <Route exact path="/" render={props => 
            <Main/>} 
          />
          <Route path="/Aboutme" render={props => 
            <Aboutme/>} 
          />
           <Route exact path="/Portfolio" render={props => 
            <Portfolio/>} 
          />
           <Route exact path="/contact" render={props => 
            <Contact/>}
          />
      	</Switch>
      </Router>
    );
  }
}