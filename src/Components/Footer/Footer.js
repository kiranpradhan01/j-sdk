import React from 'react';
import './Styles/Footer.css'; 
import footerImg from './Pictures/footerImg.png'; 
import CIPLogo from './Pictures/CIPLogo.png'; 

// This is the Navigation bar that belongs on the top of the page 
class Footer extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      return (
        <footer>
            <img src={footerImg} alt="Image of Footer"></img>
        </footer>
      );
    }
  }

export default Footer;