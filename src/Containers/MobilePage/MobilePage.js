import React from 'react';
import './Styles/MobilePage.css'; 

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class MobilePage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    
    render() {
      return (
        <div id="MobilePage_main">
            <div id="MobilePage_logoContainer"> 
                <p id="MobilePage_logo"> cognition </p>
            </div>
            <p style={{textAlign:"center"}}> Uh oh! We are extremely sorry for the inconvenience but this website is not available on the mobile version! 
                For the full experience, please use the URL on the desktop app! 
            </p>
        </div>

      );
    }
  }

export default MobilePage;