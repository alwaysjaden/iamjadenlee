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
            <div class="row">
                <div class="col col-11 col-sm-9">
                    <h2>Hi I'm Jaden</h2>
                    <p><strong><i>Pursuit of happiness </i></strong>is lifelong goal of myself. </p>

                    <p>Searching for the job best fits my life and I am good at has been journey that I took to find 
                    my happiness and satisfaction. Not a single job or position was bad nor dissatisfied, yet it was 
                    another day of journey I enjoyed and learned new things. </p>

                    <p> Starting from event management, I have experienced and executed mass event handling for small to 
                    larger scale concerts and events. Daily challenges to complete tasks and manage artists and other team members. </p>

                    <p>Journey moved on to marketing, where I have built my career for traditional, digital, 
                    and experiential marketing as I worked with numerous clients in varying fields. 
                    This got me into interest in future of e-commerce and power of digital marketing 
                    that I can implement for brand I can dedicate myself to. </p>

                    <p>So, I moved on to e-commerce field to experience and create another milestone of my lifelong journey. 
                    As I join and working with number of e-commerce company, I have executed regular planning, design, 
                    and execution of all digital media Ads. Also, with current job I have built number of Shopify website. 
                    Through this process I have seen so much potential of e-commerce, however I have also seen limitation 
                    from using template-based e-commerce stores in terms of function and overall frameworks. 
                    Then I began carving another milestone for the future and open more doors for my future and move 
                    forward to my goal of finding “perfect career”. Now I am in 4th month of learning full-stack 
                    coding where I am learning overall scheme of “Coding.” </p> 

                    <p>HTML, Javascript, CSS, Bootstrap, Python, Ruby, express….. new terms, 
                    new language, and new way of viewing the world. I am happy that I have started this journey and 
                    hoping to find so where I can utilize this newly learning skills!</p>

                    <p>Well.. I am happy right now, however I am available and open to new world !</p>
                </div>
            </div>
            <div class="container">
                {/* <a href="https://www.instagram.com/jaden_lee/" target="blank">
                <img alt="Instagram Icon" src="./assets/images/instagramicon.jpeg" ></a>
                  <a href="https://github.com/alwaysjaden" target="blank">
                <img alt="Facebook Icon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" ></a>
                 <a href="https://www.linkedin.com/in/jaden-lee-548b08132/" target="blank">
                <img alt="Linked in Icon" src="./assets/images/linkedinicon.png" ></a> */}

            </div>
        </main>

    
      </div>
    );
  }
}
