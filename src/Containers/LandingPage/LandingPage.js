import React from 'react'; 
import './Styles/LandingPage.css'; 
import Footer from '../../Components/Footer/Footer.js'
import Tablet from './Pictures/Tablet.png';
import Section from './Pictures/Section.png';
import Section2 from './Pictures/Section2.png';
import Section3 from './Pictures/Section3.png';

class LandingPage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
          mount: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
      let element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    reroute() {
      window.location.assign('/learn');
    }

    render() {
      return (
        <div id = "LandingPage"> 
            <div id="LandingPage_Header">
                <header id="top"> Fight Misinfomation. One Technical Topic at a time. </header>
                <p> An educational platform that helps you combat misinformation with awareness. Make more informed decisions from what you find online. </p>
                <div id="LandingPage_buttons"> 
                    <button onClick={() => this.handleClick("section1")}> Learn More </button>
                    <button onClick={() => this.reroute()}> Browse Topics </button>
                </div>

                <div className="wrap screen"> 
                  <img id="tablet" className="tablet" src={Tablet} alt="tablet"/>
                  <img id="section1" className="img" src={Section} alt="tablet"/>
                </div>

                <div> 
                    <img id="section2" className="img" src={Section2} alt="tablet"/> 
                </div>

                <div className="wrap"> 
                    <img id="section3" className="img" src={Section3} alt="tablet"/> 
                    <button onClick={() => this.handleClick("top")} className="topButton"> Back to the top! </button>
                </div>
            </div>

            <div> 

            </div>
            <Footer/>
        </div>
      );
    }
  }

export default LandingPage;