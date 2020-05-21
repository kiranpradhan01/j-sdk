import React from 'react';
import './Styles/VisualizationComp.css'; 
import Lessons from '../../Components/Lessons/Lessons.js'; 

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class VisualizationComp extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
          adwords: this.props.adwords
        }
    }
    
    render() {
      return (
        <div id="SMLessonPage_VisualizationComp">
         <p id="SMLessonPage_VisualizationComp_header"> Data Visualization </p>
         <p id="SMLessonPage_VisualizationComp_subText"> We are almost at the end of our lesson! But before you go, check out some of these visualizations that help you understand more about
                                                         Social Media ad targetting as well as misinformation on Facebook. This will help you build a better understanding of how prevalent Social Media targetting is and how it can affect you! </p>
          <div id="SMLessonsPage_VisualizaitonComp_graphs">
            <iframe style={{display:"block", margin:"auto", height: "830px", weight:"1000px"}} src="https://public.tableau.com/views/SocialMediaandMisinformation/Dashboard1??:showVizHome=no&:embed=true" width="1000" height="955"></iframe>
            <p> Credit: Kaggle Datasets </p>
          </div> 
        </div>

      );
    }
  }

export default VisualizationComp;