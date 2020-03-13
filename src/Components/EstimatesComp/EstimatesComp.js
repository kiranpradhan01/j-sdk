import React from 'react';
import './Styles/EstimatesComp.css'; 

// This is the Navigation bar that belongs on the top of the page 
var reach = 15000;
var engagement = 12000; 
let cost = 0; 
var counter = 0; 
var counter2 = 0; 
var counter3 = 0; 
let overallCost = 0; 

let previousBanner = true; 
let previousPost = true; 
let previousVideo = true; 

let previousBanner2 = true; 
let previousPost2 = true; 
let previousVideo2 = true;

let previousBanner3 = true; 
let previousPost3 = true; 
let previousVideo3 = true;

class EstimatesComp extends React.Component { 
    constructor(props) {
      super(props); 
        this.state = {
            bannerAds: this.props.bannerAds,
            postAds: this.props.postAds, 
            videoAds: this.props.videoAds,

        }
        this.getReach = this.getReach.bind(this);
        this.getEngagement = this.getEngagement.bind(this);
        this.getCost = this.getCost.bind(this);
    }

    getReach() {
        let newReach = reach;  
        let banner = 0; 
        let post = 0; 
        let video = 0;   
        let weeks = 0;   
        let myWeeks = this.props.weeks;

        if(counter == 0) {  
            counter++; 
        } else {
            if(this.props.bannerAds && previousBanner == true) {
                banner = 5000;
                previousBanner = false; 
            } else if(previousBanner == false && !this.props.bannerAds) {
                banner = -5000; 
                previousBanner = true; 
            } else {
                banner = 0; 
            }
             
            if(this.props.postAds && previousPost == true) {
                post = 5000;
                previousPost = false; 
            } else if(previousPost == false && !this.props.postAds) {
                post = -5000; 
                previousPost = true; 
            } else {
                post = 0; 
            }
             
            if(this.props.videoAds && previousVideo == true) {
                video = 10000;
                previousVideo = false; 
            } else if(previousVideo == false && !this.props.videoAds) {
                video = -10000; 
                previousVideo = true; 
            } else {
                video = 0; 
            } 

            if(myWeeks > 20 && myWeeks <= 25) {
                weeks = 10000000
            } else if (myWeeks <= 20 && myWeeks > 10) {
                weeks = 7500000
            } else if (myWeeks <= 10 && myWeeks > 5) {
                weeks = 5000000
            } else if (myWeeks > 0 && myWeeks <= 5) {
                weeks = 3500000; 
            } else {
                weeks = 0; 
            }
        } 
        newReach = newReach + banner + post + video + weeks;
        reach = newReach- weeks; 

        this.props.setEstimatedReach(newReach, myWeeks);

        let displayReach = ""; 
        if(newReach > 7500000 && newReach <= 10000000) {
            displayReach = "7.5M-10M"
        } else if (newReach <= 5000000  && newReach > 2500000) {
            displayReach = "2.5M-5M"
        } else if (newReach <= 2500000 && newReach > 1000000) {
            displayReach = "1M-2.5M"
        } else if (newReach > 0 && newReach <= 1000000) {
            displayReach = "0-1M"; 
        } else if (newReach > 10000000) {
            displayReach="10M-20M" 
        } else {
            displayReach="0"
        }
        
        return (
            <p> {displayReach} </p>
        )
    }

    getEngagement() {
        let newEngagement = engagement;  
        let banner = 0; 
        let post = 0; 
        let video = 0; 
        let weeks = 0;   
        let myWeeks = this.props.weeks; 

        if(counter2 == 0) {  
            counter2++; 
        } else {
            if(this.props.bannerAds && previousBanner2 == true) {
                banner = 1200;
                previousBanner2 = false; 
            } else if(previousBanner2 == false && !this.props.bannerAds) {
                banner = -1200; 
                previousBanner2 = true; 
            } else {
                banner = 0; 
            }
             
            if(this.props.postAds && previousPost2 == true) {
                post = 1000;
                previousPost2 = false; 
            } else if(previousPost2 == false && !this.props.postAds) {
                post = -1000; 
                previousPost2 = true; 
            } else {
                post = 0; 
            }
             
            if(this.props.videoAds && previousVideo2 == true) {
                video = 2500;
                previousVideo2 = false; 
            } else if(previousVideo2 == false && !this.props.videoAds) {
                video = -2500; 
                previousVideo2 = true; 
            } else {
                video = 0; 
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


        } 
        newEngagement = newEngagement + banner + post + video + weeks;
        engagement = newEngagement - weeks; 
        return (
            <p> {newEngagement} </p>
        )
    }

    getCost() {
        let newCost = cost;  
        let banner = 0; 
        let post = 0; 
        let video = 0;
        let budget = 0; 
        let weeks = 0; 

        //let myBudget = this.props.budget; 
        let myWeeks = this.props.weeks; 

        
        if(counter3 == 0) {  
            counter3++; 
        } else {
            if(this.props.bannerAds && previousBanner3 == true) {
                banner = 5000;
                previousBanner3 = false; 
            } else if(previousBanner3 == false && !this.props.bannerAds) {
                banner = -5000; 
                previousBanner3 = true; 
            } else {
                banner = 0; 
            }
             
            if(this.props.postAds && previousPost3 == true) {
                post = 2500;
                previousPost3 = false; 
            } else if(previousPost3 == false && !this.props.postAds) {
                post = -2500; 
                previousPost3 = true; 
            } else {
                post = 0; 
            }
             
            if(this.props.videoAds && previousVideo3 == true) {
                video = 12500;
                previousVideo3 = false; 
            } else if(previousVideo3 == false && !this.props.videoAds) {
                video = -12500; 
                previousVideo3 = true; 
            } else {
                video = 0; 
            } 

            if(myWeeks > 20 && myWeeks <= 25) {
                weeks = 85000
            } else if (myWeeks <= 20 && myWeeks > 10) {
                weeks = 45000
            } else if (myWeeks <= 10 && myWeeks > 5) {
                weeks = 12000
            } else if (myWeeks > 0 && myWeeks <= 5) {
                weeks = 5500; 
            } else {
                weeks = 0; 
            }
        } 

        newCost = newCost + banner + post + video + weeks;
        cost = newCost - weeks; 
        overallCost = newCost; 

        let displayCost = ""; 
        if(newCost > 75000 && newCost <= 100000) {
            displayCost = "75k-100k"
        } else if (newCost <= 75000  && newCost > 50000) {
            displayCost = "50k-75k"
        } else if (newCost <= 50000 && newCost > 25000) {
            displayCost = "25k-50k"
        } else if (newCost > 0 && newCost <= 25000) {
            displayCost = "0k-25k"; 
        } else if (newCost > 100000) {
            displayCost="100k+" 
        } else {
            displayCost="0"
        }
        
        return (
            <p id="cost"> {"$" + displayCost} </p>
        )
    }
    render() {
      return (
        <div id="SMLessonPage_EstimatesComp_Container">
            <div id="SMLessonPage_EstimatesComp">
                <div id="SMLessonPage_EstimatesComp_Reach"> 
                    <header> Estimated Reach </header>
                    {this.getReach()}
                </div>

                <div id="SMLessonPage_EstimatesComp_Engagement">
                    <header> Estimated Engagement </header>
                    {this.getEngagement()}
                </div>

                <div id="SMLessonPage_EstimatesComp_Cost">
                    <header> Estimated Cost </header>
                    {this.getCost()}
                </div>
            </div>
            {this.props.budget < overallCost ? <p id="errorMessage"> Seems like your cost is exceeding your budget, Try lowering your cost! </p> : null}
        </div>

      );
    }
  }

export default EstimatesComp;