import React from 'react';
import './Styles/Button.css'; 

// This is the Navigation bar that belongs on the top of the page 
class Button extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            text: this.props.text,
            style: this.props.style 
        }
    }
    render() {
      return (
            <button type="button" style={this.state.style}> {this.state.text} </button>

      );
    }
  }

export default Button;