import React from 'react';
import './Styles/LoadingComp.css';

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class LoadingComp extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
          title: this.props.title, 
          description: this.props.description
        }
    }
    
    render() {
      return (
        <div id="SMLessonPage_datascientist">
          <div id="SMLessonPage_datascientist_text">
            <header>
              <p class="title">{this.state.title} </p>
            </header>
            <p>{this.state.description}</p>
          </div>
          <div class="dots">
              <div id="dot1"></div>
              <div id="dot2"></div>
              <div id="dot3"></div>
          </div>
        </div>

      );
    }
  }

export default LoadingComp;
