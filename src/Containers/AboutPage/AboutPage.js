import React from 'react';
import './Styles/AboutPage.css'; 
import DayoungProfile from '../../Pictures/Profiles/Dayoung_Profile.png';
import SaiProfile from '../../Pictures/Profiles/Sai_Profile.png';
import JojoProfile from '../../Pictures/Profiles/Jojo_Profile.png'; 
import KiranProfile from '../../Pictures/Profiles/Kiran_Profile.png'; 
import CIP from '../../Pictures/cip_pic.jpg';  
import Footer from '../../Components/Footer/Footer.js'; 
import envelope_icon from '../../Pictures/envelope-regular.svg';
import linkedin_icon from '../../Pictures/linkedin-brands.svg';

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class AboutPage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = {  
        }
    }

    handleClick() {
        window.location.assign('https://www.cip.uw.edu/');
    }
    
    render() {
      return (
        <div id="AboutPage">
          <div id="AboutPage_header">
            <p id= "AboutPage_header_text1"> About Us </p>
            <p id="AboutPage_header_text2"> We are upperclassmen from the University of Washington Information School! We all come from different disciplines within the Informatics major and use our different interests to develop this Capstone project. You can learn more about us at our respective platforms. </p>
          </div>
          <div id="AboutPage_pictures">
                
                <div class="About_Page_profile">
                    <img src={KiranProfile} alt="Kiran Pradhan" class="profile_picture kiran"></img>
                    <p class="AboutPage_profile_name" id="AboutPage_profile_kiran"> Kiran Pradhan </p> 
                    <p class="AboutPage_profile_role" id="AboutPage_profile_kiran_role"> Project Manager and Developer </p>
                    <div>
                        <caption>Informatics 2021</caption>
                        <a href="https://www.linkedin.com/in/kiran-pradhan/" target="_blank"><img src={linkedin_icon} alt="LinkedIn logo links to LinkedIn profile" class="icon"></img></a>
                        <a href="mailto:pradhan.kiran786@gmail.com"><img src={envelope_icon} alt="Envelope icon links to email" class="icon second"></img></a>
                      </div>
                </div>
                
                <div class="About_Page_profile">
                    <img src={DayoungProfile} alt="Dayoung Cheong" class="profile_picture dayoung"></img>
                    <div class="left">
                      <p class="AboutPage_profile_name"> Dayoung Cheong </p>
                      <p class="AboutPage_profile_role" id="AboutPage_profile_dayoung_role"> Full-Stack Developer </p>
                      <div>
                        <caption>Informatics 2020</caption>
                        <a href="https://www.linkedin.com/in/dayoungcheong/" target="_blank"><img src={linkedin_icon} alt="LinkedIn logo links to LinkedIn profile" class="icon"></img></a>
                        <a href="mailto:cheongdayoung@gmail.com"><img src={envelope_icon} alt="Envelope icon links to email" class="icon second"></img></a>
                      </div>
                    </div>
                </div>

                <div class="About_Page_profile">
                    <img src={SaiProfile} alt="Sai Ranganathan" class="profile_picture sai"></img>
                    <p class="AboutPage_profile_name"> Sai Ranganathan </p>
                    <p class="AboutPage_profile_role"  id="AboutPage_profile_sai_role"> Full-Stack Developer </p>
                    <div>
                        <caption>Informatics 2020</caption>
                        <a href="https://www.linkedin.com/in/saiprasanna-ranganathan/" target="_blank"><img src={linkedin_icon} alt="LinkedIn logo links to LinkedIn profile" class="icon"></img></a>
                        <a href="mailto:sr52@uw.edu"><img src={envelope_icon} alt="Envelope icon links to email" class="icon second"></img></a>
                      </div>
                </div>

                <div class="About_Page_profile">
                    <img src={JojoProfile} alt="JoJo Saunders" class="profile_picture jojo"></img>
                    <p class="AboutPage_profile_name"> JoJo Saunders </p> 
                    <p class="AboutPage_profile_role" id="AboutPage_profile_jojo_role">Designer and Researcher </p>
                    <div>
                        <caption>Informatics 2021</caption>
                        <a href="https://www.linkedin.com/in/jojosaunders/" target="_blank"><img src={linkedin_icon} alt="LinkedIn logo links to LinkedIn profile" class="icon"></img></a>
                        <a href="mailto:jojosaunders99@gmail.com"><img src={envelope_icon} alt="Envelope icon links to email" class="icon second"></img></a>
                      </div>
                </div>
            </div>

            <div id="AboutPage_Cip"> 
                <div id="AboutPage_Cip_left"> 
                    <img src={CIP} alt="Center for Informed Public"></img>
                </div>

                <div id="AboutPage_Cip_right"> 
                    <p id="AboutPage_Cip_right_header"> Our Sponsor </p>
                    <p id="AboutPage_Cip_right_text"> Our Sponsor for our Capstone Project is the Center for an Informed Public at the University of Washington. The CIP’s mission is to resist strategic misinformation, promote an informed society, and strengthen democratic discourse.</p>
                    <button id="AboutPage_Cip_right_button" onClick={() => this.handleClick()} className="Visit Homepage"> Visit Homepage </button>

                </div>
            </div>
            <Footer/> 
        </div>
      );
    }
  }

export default AboutPage;