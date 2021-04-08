// Include React
import React, { Component } from 'react';
import Nav from './children/Nav'

require('./main.css');

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>   
        <main class="container mainbox">
          
        </main>

        <footer>
            <div className="container text-center">
                <p>Copyright &copy; Your Website 2016</p>
            </div>
        </footer>
      </div>
    );
  }
}
