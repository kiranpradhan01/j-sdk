import React from 'react';
import './Styles/SMLessonPage.css'; 
//import ContactButton from '../../Components/Button/Button.js'
import SocialDashboard from '../../Pictures/SocialDashboard.png';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


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

          <div id="SMLessonPage_uploadForm">

            <div id="SMLessonPage_uploadForm_textLeft">
              <p>
                Let’s look at how Facebook Ads can Target Users:
              </p>
            </div> 

            <div id="SMLessonPage_uploadForm_center">
              <header> Upload your Facebook Data JSON File </header>
              <p> Facebook (and other social media sites) take note of what you might like and what interests you have, 
                  that way they can give you ads that align with your interest the most! We’d like to show you what yours are 
                  and help you understand them better. </p>
              <div id="SMLessonPage_uploadForm_center_form">  
                <div id="SMLessonPage_uploadForm_center_form_area">
                  <i className="fas fa-file-upload"> </i>
                  <p> Browse... </p>
                </div>   
                <input type="file" id="myFile" name="filename"/>
              </div>
              <div> 
                <p> Dont know what that is? <a href="https://www.cnbc.com/2018/03/23/how-to-download-a-copy-of-facebook-data-about-you.html"> Click Here </a> </p>
              </div> 
            </div>

          <div id="SMLessonPage_uploadForm_disclaimer"> 
            <p> 
              We know, we know, this isn’t the smoothest way to do this. We’re working on it right now. 
              Think you can help us? Click here.
            </p> 
          </div>
        </div>


        </div>
    )}
}

export default SMLessonPage;