import React from 'react'; 
import './Styles/LandingPage.css'; 

import ContactButton from '../../Components/Button/Button.js'
//import OpeningBoxSVG from '../../Pictures/OpeningBoxSVG.js'
import Tablet from './Pictures/tablet.png';
import Blob2 from '../../Pictures/blob2.png';
import Blob3 from '../../Pictures/blob3.png'; 

class LandingPage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      return (
        <div id = "LandingPage"> 
            <div id="LandingPage_Header">
                <header> Small Concepts, Big Ideas, Huge Impact</header>
                <p> A platform to help you combat misinformation through education.
                    Use what you learn here to help you view what you know through different lens. 
                    Learn responsibly, act accordingly. </p>
                <div id="LandingPage_buttons"> 
                    <button> Browse Topics </button>
                    <button> Learn More </button>
                </div>

                <div> 
                    <img src={Tablet} alt="tablet"/> 
                </div>
            </div>

            <div> 

            </div>
        </div>
      );
    }
  }

export default LandingPage;