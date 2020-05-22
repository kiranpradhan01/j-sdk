import React from 'react';
import './Styles/CreateAdPart2.css'; 
import EstimatesComp from '../../Components/EstimatesComp/EstimatesComp.js'; 
import { thistle } from 'color-name';

// This is the the loading component that is rendered onto the page when we are doing work on the backend
let reach = 0;  
let myWeeks = 0; 
var engagement = 12000; 
var counter2 = 0; 

let previousBanner2 = true; 
let previousPost2 = true; 
let previousVideo2 = true;
class CreateAdPart2 extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            budget: this.props.budget,
            postAds: this.props.postAds,
            videoAds: this.props.videoAds,
            bannerAds: this.props.bannerAds,
            value: 0
        }

        this.sliderHandler = this.sliderHandler.bind(this); 
        this.getUserNum = this.getUserNum.bind(this); 
    }

    getUserNum() {
        let newEngagement = engagement;  
        let banner = 0; 
        let post = 0; 
        let video = 0; 
        let weeks = 0;   
        let myWeeks = this.state.weeks; 

        let original = this.state.budget; 

        if(this.state.bannerAds == true) {
            banner = 2000
        }

        if(this.state.postAds == true) {
            post = 5000
        }

        if(this.state.videoAds == true) {
            video = 10000
        }


        if(myWeeks > 20 && myWeeks <= 25) {
            weeks = 50000
        } else if (myWeeks <= 20 && myWeeks > 10) {
            weeks = 25000
        } else if (myWeeks <= 10 && myWeeks > 5) {
            weeks = 10000
        } else if (myWeeks > 0 && myWeeks <= 5) {
            weeks = 5000; 
        } else {
            weeks = 0; 
        }  

        

        newEngagement = newEngagement + banner + post + video + weeks;

        this.props.getEngagement(newEngagement,weeks); 
    }


    sliderHandler() {
        
        var slider2 = document.getElementById("SMLessonPage_createAdPart2_slider_input");
        var output2 = document.getElementById("output2");
        output2.innerHTML = slider2.value +  " weeks";

        if(this.state.value > slider2.value) {
            this.setState({
                budget: this.state.budget + 3000
            })
        } else {
            this.setState({
                budget: this.state.budget - 3000 
            })
        }
         
        this.setState({
            weeks: slider2.value,
            value: slider2.value
        }); 

        this.getUserNum(); 
    }

    render() {
      return (
        <div id="SMLessonPage_createAdPart2">
            <div id="SMLessonPage_createAdPart2_budgetHeader"> 
                <header> Budget: <span>${this.state.budget}</span></header>
                {this.state.budget < 0 ? <p id="SMLessonPage_createAdPart2_errorMessage"> Seems like your cost is exceeding your budget, Try lowering your cost! </p> : null}

                <div id="SMLessonPage_createAdPart2_slider">
                            <p>Select a Duration for your Campaign: </p>
                            <input id="SMLessonPage_createAdPart2_slider_input" onChange={this.sliderHandler} type="range" min="1" max="25" value="1" value={this.state.value}></input>
                            <p>Value: <span id="output2"></span></p>
                </div>
            </div>
        </div>
      );
    }
  }

export default CreateAdPart2;