import React from 'react';
import './Styles/Button.css'; 

// This is the Navigation bar that belongs on the top of the page 
class Button extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            text: this.props.text 
        }
    }
    render() {
      return (
        <div id="button_container">
            <button type="button"> {this.state.text} </button>
        </div>

      );
    }
  }

export default Button;