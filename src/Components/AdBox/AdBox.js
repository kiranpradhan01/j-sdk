import React from 'react';
import './Styles/AdBox.css'; 

// This is the Navigation bar that belongs on the top of the page 
class AdBox extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            text: this.props.text,
            style: this.props.style 
        }
    }



    render() {
      return (
            <div className="box">
                <div className="title">Create an Ad</div>

                <label for="search" className="inputTitle">TopicTitle</label>
                <input className="input" type="text" placeholder="Put the search thing" name="name"></input>
                
            </div>

      );
    }
  }

export default AdBox;