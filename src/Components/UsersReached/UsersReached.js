import React from 'react';
import './Styles/UsersReached.css'; 

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class UsersReached extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
          days: this.props.days, 
          userNum: this.props.userNum
        }
    }
    
    render() {
      return (
        <div id="SMLessonPage_usersReached">
          <div id="SMLessonPage_usersReached_header">
            <p id= "SMLessonPage_usersReached_header_tex1"> Over the course of {this.state.days} days, You were able to reach </p>
            <p id="SMLessonPage_usersReached_header_tex2"> {this.state.userNum} users </p>
          </div>

          <p id="SMLessonPage_usersReached_subheader"> One of them is yourself! </p>

          <p id="SMLessonPage_usersReached_subtext"> Remember all of those adwords that we let you choose from? That actually came from your own ad words that you provided </p>
        </div>

      );
    }
  }

export default UsersReached;