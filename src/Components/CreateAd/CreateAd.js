import React from 'react';
import './Styles/CreateAd.css'; 
import CreateAdButton from '../../Components/Button/Button.js';
import BannerAds from '../../Pictures/BannerAds.png'; 
import PostAds from '../../Pictures/PostAds.png'; 
import VideoAds from'../../Pictures/VideoAds.png'; 
import EstimatesComp from '../EstimatesComp/EstimatesComp';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';

// This is the the loading component that is rendered onto the page when we are doing work on the backend
let reach = 0;  
let myWeeks = 0; 
class CreateAd extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            bannerAds: false,
            postAds: false,
            videoAds: false,
            reach: 10000, 
            budget: 0, 
            weeks: 0, 
            reach: 0 
        }
        this.onClickHandler = this.onClickHandler.bind(this); 
        this.sliderHandler = this.sliderHandler.bind(this); 
        this.bannerAdsHandler = this.bannerAdsHandler.bind(this); 
        this.postAdsHandler = this.postAdsHandler.bind(this); 
        this.videoAdsHandler = this.videoAdsHandler.bind(this);
        this.confirmButtonClicked = this.confirmButtonClicked.bind(this);  
    }

    sliderHandler() {
        var slider = document.getElementById("SMLessonPage_createAd_card_middle_sliders_slider1_input");
        var output = document.getElementById("output1");
        output.innerHTML = "$" + slider.value;
        
        var slider2 = document.getElementById("SMLessonPage_createAd_card_middle_sliders_slider2_input");
        var output2 = document.getElementById("output2");
        output2.innerHTML = slider2.value +  " weeks";
         
        this.setState({
            budget: slider.value,
            weeks: slider2.value
        }); 
    }

    setEstimatedReach(estimatedReach, weeks) {
        reach = estimatedReach;
        myWeeks = weeks;  
    }

    confirmButtonClicked() {
        console.log(reach); 
        this.props.onCreateAdClicked(3,reach, myWeeks); 
    }

    bannerAdsHandler() {
        this.setState({ 
            bannerAds: !this.state.bannerAds
        })
        console.log(this.state.bannerAds); 
    }

    postAdsHandler() {
        this.setState({
            postAds:!this.state.postAds
        })
    }

    videoAdsHandler() {
        this.setState({
            videoAds:!this.state.videoAds
        })
    }
    
    onClickHandler = (e) => {
        console.log(e.target.innerText);
        this.props.onAdwordClicked(2, e.target.innerText);
    }

    render() {
      return (
        <div id="SMLessonPage_createAd">
            <div id="SMLessonPage_createAd_card">
                <div id="SMLessonPage_createAd_card_top">
                    <div id="SMLessonPage_createAd_card_header">
                        <p> {this.props.selectedWord} </p> 
                        <p>  Let's See How Far of a Reach You Can Create </p>
                        <p> <span> Select an Ad Type: </span> </p>
                    </div>

                    <div id="SMLessonPage_createAd_card_adTypes"> 
                        <div id="SMLessonPage_createAd_card_bannerAds"> 
                            <img src={BannerAds} alt="BannerAds"/> 
                            <div id="SMLessonPage_createAd_card_checkboxes">
                                <input type="checkbox" id="SMLessonPage_createAd_card_bannerAds_banner" onChange={this.bannerAdsHandler}></input>
                                <label for="vehicle1" id="SMLessonPage_createAd_card_bannerAds_banner_Text"> BannerAds </label> 
                            </div>
                        </div>

                        <div id="SMLessonPage_createAd_card_bannerAds"> 
                            <img src={PostAds} alt="PostAds"/> 

                            <div id="SMLessonPage_createAd_card_checkboxes">
                                <input type="checkbox" id="SMLessonPage_createAd_card_postAds_post" onClick={this.postAdsHandler}></input>
                                <label for="vehicle1" id="SMLessonPage_createAd_card_postAds_post_Text"> PostAds </label> 
                            </div>
                        </div>

                        <div id="SMLessonPage_createAd_card_bannerAds"> 
                        <img src={VideoAds} alt="VideoAds"/> 
                        
                            <div id="SMLessonPage_createAd_card_checkboxes">
                                <input type="checkbox" id="SMLessonPage_createAd_card_videoAds_video" onClick={this.videoAdsHandler}></input>
                                <label for="vehicle1" id="SMLessonPage_createAd_card_videoAds_video_Text"> VideoAds </label> 
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>
                <div id="SMLessonPage_createAd_card_middle">
                    <div id="SMLessonPage_createAd_card_middle_sliders">
                        <header> Now let's choose how much you want to spend and how long: </header>

                        <div id="SMLessonPage_createAd_card_middle_sliders_slider1">
                            <p>Advertising Budget:</p>
                            <input id="SMLessonPage_createAd_card_middle_sliders_slider1_input" onChange={this.sliderHandler} type="range" min="1" max="100000"></input>
                            <p>Value: <span id="output1"></span></p>
                        </div>

                        <div id="SMLessonPage_createAd_card_middle_sliders_slider2">
                            <p>Duration of Campaign:</p>
                            <input id="SMLessonPage_createAd_card_middle_sliders_slider2_input" onChange={this.sliderHandler} type="range" min="1" max="25"></input>
                            <p>Value: <span id="output2"></span></p>
                        </div>
                    </div>

                    <div id="SMLessonPage_createAd_card_middle_numbers">
                       <EstimatesComp bannerAds={this.state.bannerAds} postAds={this.state.postAds} videoAds={this.state.videoAds} budget={this.state.budget} weeks={this.state.weeks}  setEstimatedReach={(estimatedReach,weeks) => this.setEstimatedReach(estimatedReach, weeks)} /> 
                    </div>
                </div>

                <hr/>
                <div id="SMLessonPage_createAd_card_bottom"> 
                    <header> Once you're ready to run, just hit confirm and we will take it from there! </header>
                    <button type="submit" onClick={this.confirmButtonClicked} style={{marginTop:"40px", marginLeft:"600px"}}> Confirm </button>  
                </div> 
            </div>
        </div>
      );
    }
  }

export default CreateAd;