import React from 'react';
import './Styles/SMLessonPage.css'; 
//import ContactButton from '../../Components/Button/Button.js'
import SocialDashboard from '../../Pictures/SocialDashboard.png';


class SMLessonPage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      return (
        <div id = "SMLessonPage">
          <div id="SMLessonPage_introduction"> 
            <div id="SMLessonPage_introduction_Text">
                <header> Let's Talk about Targeted Social Media Ads </header>
                <p> Social Media utilize advertisements to keep themselves afloat. From your favorite     personality on 
                    Facebook, Instagram, TikTok, or Youtube, to the actual companies themselves, the synergy from 
                    advertisers getting exposure and people/companies getting funded continues to help both groups out. 
                    Let’s look into how social media advertisements can get to you, and how that can work in your 
                    favor… and sometimes against.</p>
            </div> 
            <div id="SMLessonPage_introduction_Image"> 
              <img src={SocialDashboard} alt="Social Media Dashboard" class="socialMediaDashboardImage"></img>
            </div>
          </div>
          
          <div id="SMLessonPage_datascientist">
            <header>
              <p class="title"> Our Data Scientist is on it </p>
            </header>
            <span class="dot1"></span>
            <span class="dot2"></span>
            <span class="dot3"></span>
            <p>While we're analyzing your ad words, let's simulate an ad campaign to show how far simple advertisements can spread through a social media platform by targeting people with specific interests</p>
          </div>

        </div>
    )}
}

export default SMLessonPage;