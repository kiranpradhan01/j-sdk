import React from 'react';
import './Styles/HomePage.css'; 
import HomeButton from '../../Components/Button/Button.js'
import InformationPic from '../../Pictures/information_flow.jpeg'

// This is the Navigation bar that belongs on the top of the page 
class HomePage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      const homeButton_text = "Call to Action "
      return (
        <div id="HomePage_main">
            <div id="HomePage_left">  
                <div id="HomePage_title">
                    <p> Understanding the Flow of Information </p>
                </div>
                <div id="HomePage_buttons"> 
                    <HomeButton text={homeButton_text}/> 
                    <a href="https://www.google.com">Something else</a>
                </div>

                <div id="HomePage_paraText">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div id="HomePage_right">
                <img src = {InformationPic}  alt = "diagram for Information"/> 
            </div>
        </div> 


      );
    }
  }

export default HomePage;