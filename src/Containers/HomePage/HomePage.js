import React from 'react';
import './Styles/HomePage.css'; 
import ContactButton from '../../Components/Button/Button.js'
//import OpeningBoxSVG from '../../Pictures/OpeningBoxSVG.js'
import Blob1 from '../../Pictures/blob1.png';
import Blob2 from '../../Pictures/blob2.png';
import Blob3 from '../../Pictures/blob3.png'; 
import OpeningBox from '../../Pictures/OpenBox.png';
import ComputerEducation from '../../Pictures/computerEducation.png'; 
import InformationThought from '../../Pictures/informationThought.png'; 
import DayoungProfile from '../../Pictures/Profiles/Dayoung_Profile.png';
import SaiProfile from '../../Pictures/Profiles/Sai_Profile.png';
import JojoProfile from '../../Pictures/Profiles/Jojo_Profile.png'; 
import KiranProfile from '../../Pictures/Profiles/Kiran_Profile.png'; 
import HomePage_Panel from './HomePage_Panel.js'; 
// This is the Navigation bar that belongs on the top of the page 
class HomePage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      const contactButton_text = "Contact Us"
      return (
        <div id = "HomePage"> 
          <div id="HomePage_topPanel">
            <HomePage_Panel/> 
          </div>


          <div id="HomePage_mainPanel">

              <div class="HomePage_mainPanel_section" id="HomePage_mainPanel_section_1">
                  <div class="HomePage_left"> 
                      <div class="HomePage_paraText" id="HomePage_paraText_1">
                          <header> If disinformation is a magician, we show you what's under their sleeves</header>
                          <p> Misinformation and Disinformation do not just become viral and popular in an instant, their spread is being constantly engineered to reach their target audiences. Our focus is to make you aware
                              of how misinformation spreads so that you have the ability to better determine what information is valid. 
                          </p>
                      </div>
                  </div>
                  <div class="HomePage_right">
                    <img src={Blob1} alt="blob1" class="blob"></img>
                    <img src={OpeningBox} alt="Opening Box" class="top_picture"></img>
                  </div>
              </div> 

              <div class="HomePage_mainPanel_section" id="HomePage_mainPanel_section_2"> 
                  <div class="HomePage_left">
                    <div  class="HomePage_paraText" id="HomePage_paraText_2">
                        <header> <span class="green_text"> What </span> We're Doing </header> 
                        <p> We're creating an interactive and educational experience to help raise awareness about the spread of disinformation. We're focused on raising awareness of the tactics used to spread misinformation so 
                            that you can make the most informed decision about if the content you're seeing is valid. </p>
                    </div>
                    <img src={Blob2} alt="blob2" class="blob" id="blob2"></img>
                  </div> 

                  <div class="HomePage_right"> 
                    <img src={ComputerEducation} alt="Computer Education" class="top_picture" id="computer_education"></img>
                  </div>
              </div> 

                  <div class="HomePage_mainPanel_section" id="HomePage_mainPanel_section_3">
                    <div class="HomePage_left">
                      <div  class="HomePage_paraText" id="HomePage_paraText_3"> 
                        <header> <span class="green_text"> Why </span> We're Doing It </header>
                        <p> As students a part of Information School, we're passionate about individual having the information they need to make the informed decision for themselves. With disinformation creating ill-informed decisions
                            and actions, we're hoping to help combat through and education based approach. 
                        </p>
                      </div>
                    </div>
                    <div class="HomePage_right" id="HomePage_right_panel3">
                      <img src={Blob3} alt="blob3" class="blob"></img>
                      <img src={InformationThought} alt="Information Thought Bubbles" id="information_thought_picture" class="top_picture"></img>
                    </div>
                  </div> 

                  <div class="HomePage_mainPanel_section" id="HomePage_mainPanel_section_4"> 
                    <div class="HomePage_left">
                      <div class="HomePage_paraText" id="HomePage_paraText_4"> 
                        <header> <span class="green_text"> Who </span> Are We </header>
                        <p> We're a team of four students at the Information School. We have experience in front-end development, back-end development, design, research and all the little niches in between those topics. We're pretty  
                            to work with, if we do say so ourselves. If you're interested in working with us, drop us a line! 
                        </p>
                        <ContactButton text={contactButton_text}/> 
                      </div>
                    </div>
                    <div class="HomePage_right" id="HomePage_right_gridView"> 
                        <div id="HomePage_profileGrid_left"> 
                          <img src={SaiProfile} alt="Sai Ranganathan" class="profile_picture"></img>
                          <caption> Sai Rangnathan - Full-Stack Developer </caption>

                          <img src={DayoungProfile} alt="Dayoung Cheong" class="profile_picture"></img>
                          <caption> Dayoung Cheong - Full-Stack Developer </caption>
                        </div> 

                        <div id="HomePage_profileGrid_right"> 
                        <img src={KiranProfile} alt="Kiran Pradhan" class="profile_picture"></img>
                        <caption> Kiran Pradhan - Project Manager, Back-End Developer </caption>

                        <img src={JojoProfile} alt="Dayoung Cheong" class="profile_picture"></img>
                        <caption> Jojo Saunders - Desinger, Researcher </caption>
                        </div> 
                      </div>
                  </div>
              
              </div>
          </div> 
      );
    }
  }

export default HomePage;