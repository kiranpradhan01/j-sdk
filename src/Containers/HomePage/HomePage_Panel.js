import React from 'react';
import './Styles/HomePage_Panel.css'; 
import HomePage_Panel_Button from '../../Components/Button/Button.js'
// This is the Navigation bar that belongs on the top of the page 
class HomePage_Panel extends React.Component {
    constructor(props) {
      super(props); 
        this.state = {  
        }
    }
    render() {
      let HomePage_Panel_Button_text = "Get Started"; 
      return (
        <div id="HomePage_Panel">
          <div id="HomePage_Panel_header">
            <p id="line1"> disinformation </p>
            <p id="line2"> Understand <span id='green_text'> Information </span> </p>
            <p id="line3"> misinformation </p>
          </div>

          <caption> Information is power, and we want to help you understand how information and disinformation spreads </caption>
          <HomePage_Panel_Button text={HomePage_Panel_Button_text} style={{marginLeft: "45vw"}} />
          <a id="panel_tag"> Learn More </a> 
        </div>

      );
    }
  }

export default HomePage_Panel;