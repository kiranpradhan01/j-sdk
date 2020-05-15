import React from 'react';
import './Styles/CreateAdPart1.css'; 
import CreateAdButton from '../../Components/Button/Button.js';
import BannerAds from '../../Pictures/BannerAds.png'; 
import PostAds from '../../Pictures/PostAds.png'; 
import VideoAds from'../../Pictures/VideoAds.png'; 
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';

// This is the the loading component that is rendered onto the page when we are doing work on the backend
let reach = 0;  
let myWeeks = 0; 
class CreateAdPart1 extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            bannerAds: false,
            postAds: false,
            videoAds: false, 
            budget: 50000, 
            weeks: 0, 
            reach: 0 
        }

        this.bannerAdsHandler = this.bannerAdsHandler.bind(this); 
        this.postAdsHandler = this.postAdsHandler.bind(this); 
        this.videoAdsHandler = this.videoAdsHandler.bind(this);
        //this.confirmButtonClicked = this.confirmButtonClicked.bind(this);  
    }

    bannerAdsHandler() {
        this.setState({ 
            bannerAds: !this.state.bannerAds,
        })

        if(this.state.bannerAds == true) {
            this.setState({
               budget: this.state.budget+10000
            }, () => this.props.budgetChanged(this.state.budget, this.state.bannerAds))
        } else {
            this.setState({
                budget: this.state.budget-10000
            }, () => this.props.budgetChanged(this.state.budget, this.state.bannerAds))
        }
    }

    postAdsHandler() {
        this.setState({
            postAds:!this.state.postAds,
        })

        if(this.state.postAds == true) {
            this.setState({
               budget: this.state.budget+10000
            }, () => this.props.budgetChanged(this.state.budget, this.state.postAds))
        } else {
            this.setState({
                budget: this.state.budget-10000
            }, () => this.props.budgetChanged(this.state.budget, this.state.postAds))
        }
 
    }

    videoAdsHandler() {
        this.setState({
            videoAds:!this.state.videoAds, 
        })

        if(this.state.videoAds == true) {
            this.setState({
               budget: this.state.budget+15000
            }, () => this.props.budgetChanged(this.state.budget, this.state.videoAds))
        } else {
            this.setState({
                budget: this.state.budget-15000
            }, () => this.props.budgetChanged(this.state.budget, this.state.videoAds))
        }
    }

    render() {
      return (
        <div id="SMLessonPage_createAdPart1">
            <div id="SMLessonPage_createAdPart1_card">
                <div id="SMLessonPage_createAdPart1_card_top">
                    <div id="SMLessonPage_createAdPart1_card_header">
                        <p> {this.props.selectedWord} </p> 
                        <p>  We are going to go ahead and give you a budget of ${this.state.budget}! Create a campaign and try to get maximum engagement from your ads on Facebook. </p>
                        <p> <span> Select an Ad Type: </span> </p>
                    </div>

                    <div id="SMLessonPage_createAdPart1_card_adTypes"> 
                        <div id="SMLessonPage_createAdPart1_card_bannerAds"> 
                            <img src={BannerAds} alt="BannerAds"/> 
                            <div id="SMLessonPage_createAdPart1_card_checkboxes">
                                <input type="checkbox" id="SMLessonPage_createAdPart1_card_bannerAds_banner" onChange={this.bannerAdsHandler}></input>
                                <label for="vehicle1" id="SMLessonPage_createAdPart1_card_bannerAds_banner_Text"> BannerAds </label> 
                            </div>
                            <p> Price: $10,000 </p>
                        </div>

                        <div id="SMLessonPage_createAdPart1_card_bannerAds"> 
                            <img src={PostAds} alt="PostAds"/> 

                            <div id="SMLessonPage_createAdPart1_card_checkboxes">
                                <input type="checkbox" id="SMLessonPage_createAdPart1_card_postAds_post" onClick={this.postAdsHandler}></input>
                                <label for="vehicle1" id="SMLessonPage_createAdPart1_card_postAds_post_Text"> PostAds </label> 
                            </div>
                            <p> Price: $10,000 </p>
                        </div>

                        <div id="SMLessonPage_createAdPart1_card_bannerAds"> 
                        <img src={VideoAds} alt="VideoAds"/> 
                        
                            <div id="SMLessonPage_createAdPart1_card_checkboxes">
                                <input type="checkbox" id="SMLessonPage_createAdPart1_card_videoAds_video" onClick={this.videoAdsHandler}></input>
                                <label for="vehicle1" id="SMLessonPage_createAdPart1_card_videoAds_video_Text"> VideoAds </label> 
                            </div>
                            <p> Price: $15,000 </p>
                        </div>
                    </div>
                </div>

                <div id="SMLessonPage_createAdPart1_card_bottom">
                    <div id="SMLessonPage_createAdPart1_card_bottom_budgetCount"> 
                        <p> Budget: <span> ${this.state.budget}</span></p>
                    </div> 
                </div>
            </div>
        </div>
      );
    }
  }

export default CreateAdPart1;