import React from 'react';
import './Styles/DataInstructions.css';
import Screen1 from './Pictures/Screen1.png'; 
import Screen2 from './Pictures/Screen2.png';  
import Screen3 from './Pictures/Screen3.png';  
import Screen4 from './Pictures/Screen4.png';  
import Screen5 from './Pictures/Screen5.png'; 
import FacebookLogo from './Pictures/facebook.gif';    
import { Link } from 'react-router-dom';

class DataInstructions extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      return (
        <div id="DataInstructions">
            <header> Download Your Facebook Data </header>
            <img src={FacebookLogo} alt="facebook"></img>
            <p> For this activity, we are going to go ahead and download some of your facebook data 
                that will be required. Follow these steps below in order to get your dataset downloaded 
                and ready for the activity. 
            </p>
                <ul id="DataInstructions_List"> 
                    <li>1) Go to your Facebook "Settings & Privacy" Page, and click Settings </li>
                    <li> 2) On the left hand side of the page, you will find a tab that says 'Your Facebook Information' </li>
                        <div>
                        <img src={Screen1} alt="blob1"></img>
                        </div>
                    <li> 3) Click on this, and click on view of the section that says 'Download your Information'</li> 
                        <div>
                        <img src={Screen2} alt="blob1"></img>
                        </div>
                    <li> 4) Change your format to JSON and click on the button that says Deselct All </li>
                        <div>
                        <img src={Screen3} alt="blob1"></img>
                        </div>
                    <li> 5) Scroll down until you have found the section 'Ads and Businesses' underneath Information about You</li>
                        <div>
                        <img src={Screen4} alt="blob1"></img>
                        </div>
                    <li> 6) Click on the checkbox and scroll back up to click on Create File </li>
                        <div>
                        <img src={Screen5} alt="blob1"></img>
                        </div>
                    <li id="DataInstructions_last_element"> 7) Once your infomration has downloaded, which will take 2-3 minutes, upload the file that says 'ad_interests.json'</li>
                </ul> 
            </div>
      );
    }
  }

export default DataInstructions; 