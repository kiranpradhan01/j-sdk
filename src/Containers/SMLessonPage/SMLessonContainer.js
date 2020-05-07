import React from 'react';
import './Styles/SMLessonIntro.css'; 
import SMLessonPage from './SMLessonPage.js'; 
import SMLessonIntro from './SMLessonIntro.js'; 

var lessonIntro = true;  
class SMLessonContainer extends React.Component {
    constructor(props) {
      super(props); 
        this.state = {  
            lessonIntro: true
        } 

        this.onContinueClicked = this.onContinueClicked.bind(this); 
    }

    onContinueClicked(clicked) {
        this.setState({
            lessonIntro: false
        })
    }

    render() {
      console.log(this.state.lessonIntro); 
      return (
        <div id = "SMLessonContainer">
            {this.state.lessonIntro ? <SMLessonIntro onContinueClicked={(clicked) => this.onContinueClicked(clicked)}/>:<SMLessonPage/>}
        </div>
    )}
}

export default SMLessonContainer;