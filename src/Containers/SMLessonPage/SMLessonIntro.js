import React from 'react';
import './Styles/SMLessonIntro.css'; 
import SMLessonPage from './SMLessonPage.js'; 

class SMLessonIntro extends React.Component {
    constructor(props) {
      super(props); 

        this.changeComponent = this.changeComponent.bind(this); 
    }

    changeComponent() {
        this.props.onContinueClicked(false); 
    }

    render() {
      return (
        <div id = "SMLessonIntro">

            <div id="SMLessonIntro_Left">
                <div id="SMLessonIntro_texts">

                    <div id="SMLessonIntro_header"> Social Media </div>


                    <div id="SMLessonIntro_text"> 

                        <p id="SMLessonIntro_text_1"> Welcome to your first lesson on Social Media Ads and how it affects
                        misinformation! For this lesson, we are going to focus on how ad interests in your facebook data
                        can help anything reach you through social media. First step will be to upload your own Facebook data (Don't worry, 
                        it's all a secure process). </p>

                        <p id="SMLessonIntro_text_2"> Next, we are going to give you a bunch of random words. You are going to go ahead and 
                        create your own ad and try to get maximum user engagement. Create an ad for a topic you are not familiar with and 
                        see how that ad reaches a large audience and how that relates to all the things we read on Social Media. </p>
                    </div>
                </div>
            </div>

            <div id="SMLessonIntro_Right"> 
                <div id="SMLessonIntro_circle">
                    <div id="SMLessonIntro_circle1"></div>
                    <div id="SMLessonIntro_circle2"></div>
                    <div id="SMLessonIntro_circle3"></div>
                    <div id="SMLessonIntro_circle4"></div>
                    <div id="SMLessonIntro_circle5"></div>
                </div>
            </div>


        </div>
    )}
}

export default SMLessonIntro;