import React from 'react';
import './Styles/NavBar2.css'; 

// This is the Navigation bar that belongs on the top of the page 
class NavBar extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      return (
        <div id="navbar2">
            <a  href="#home" id="cognition"> cognition </a>
            <a href="#introduction" class="navbar2_header"> What we do </a> 
            <a href="#works" class="navbar2_header">How it works</a> 
            <a href="#about" class="navbar2_header">About us</a>
            <a href="#topics" class="navbar2_header">Topics</a> 
        </div>

      );
    }
  }

export default NavBar;