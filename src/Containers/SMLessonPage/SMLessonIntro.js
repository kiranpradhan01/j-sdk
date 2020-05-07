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
                <div id="SMLessonIntro_dots">
                    <div id ="SMLessonIntro_cicles_dot1"> </div>
                    <div id ="SMLessonIntro_cicles_dot2"> </div>
                    <div id ="SMLessonIntro_cicles_dot3"> </div>
                    <div id ="SMLessonIntro_cicles_dot4"> </div>
                    <div id ="SMLessonIntro_cicles_dot5"> </div>
                </div>

                <div id="SMLessonIntro_texts">

                    <div id="SMLessonIntro_header"> Social Media </div>


                    <div id="SMLessonIntro_text"> 

                        <p id="SMLessonIntro_text_1"> This is the main section where content will be. 
                        Put your sick content here so that people can be educated and that this will 
                        all work to actually help educate people and change the world ok this is probably 
                        enough sample text. </p>

                        <p id="SMLessonIntro_text_2"> This is the main section where content will be. 
                        Put your sick content here so that people can be educated and that this will 
                        all work to actually help educate people and change the world ok this is probably 
                        enough sample text. </p>
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

                <div id="SMLessonIntro_buttons"> 
                    <p> Back </p>
                    <button onClick={this.changeComponent}> Continue </button>
                </div>
            </div>


        </div>
    )}
}

export default SMLessonIntro;