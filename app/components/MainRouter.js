import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Main from "./Main";
import Contact from "./Contactme";
import Aboutme from "./Aboutme";
import axios from 'axios';
import Portfolio from './Portfolio'

export default class MainRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };
  }

  authenticate = () => {
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate = () => {
    this.setState({
      authenticated: false
    })
  }

  logout = () => {
    axios.get('/apis/users/logout')
      .then(function (data) {
        this.deAuthenticate();
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }

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