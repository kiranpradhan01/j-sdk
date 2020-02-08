import React from 'react';
import './Styles/NavBar.css'; 

// This is the Navigation bar that belongs on the top of the page 
class NavBar extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
        }
    }
    render() {
      return (
        <div id="topnav">
            <a className="active" href="#home">Home</a>
            <a href="data">Data</a> 
            <a href="simulation">Simulation</a> 
            <a href="about">About</a>
            <a href="contact">Contact</a> 
        </div>

      );
    }
  }

export default NavBar;