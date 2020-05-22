import React from 'react';
import './Styles/CircleAdComp.css'; 
import CircleAds from '../../Components/CircleAds/CircleAds.js';
import Lessons from '../../Components/Lessons/Lessons.js'; 

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class CircleAdComp extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
          adwords: this.props.adwords
        }
    }
    
    render() {
      return (
        <div id="SMLessonPage_CircleAdComp">
         <p id="SMLessonPage_CircleAdComp_subtext"> Remember all of those adwords that we let you choose from? That actually came from your own ad words that you provided: </p>
          <div id="SMLessonsPage_CircleAdComp_adWordsGraph">
            <CircleAds adwords={this.state.adwords} class="circlewords"/> 
          </div> 
          <div id="SMLessonsPage_CircleAdComp_subText2"> All these terms allow advertisers to reach you! </div>
        </div>

      );
    }
  }

export default CircleAdComp; 