import React from 'react';
import './Styles/LessonsComp.css'; 
import Lessons from '../../Components/Lessons/Lessons.js'; 

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class LessonsComp extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    
    render() {
      return (
        <div id="SMLessonsPage_LessonsComp">
            <div id="SMLessonsPage_LessonsComp_header"> These can be used for good, but it’s important to recognize how easy it is to be targeted by advertisers directly or indirectly. </div>

            <div id="SMLessonsPage_LessonsComp_lessons"> 
              <Lessons/> 
            </div>
          </div>

      );
    }
  }

export default LessonsComp; 