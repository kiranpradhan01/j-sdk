import React from 'react';
import './Styles/NavBar2.css'; 
import { Link } from 'react-router-dom';

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
            <div id="cognition"><h1><Link to={'/'} id="cognition">Cognition</Link></h1></div>
            <div id="nav-links">
              <a><Link to={'/'} class="navbar2_header">Home</Link> </a> 
              <a><Link to={'/about'} class="navbar2_header">About Us</Link></a> 
              <a><Link to={'/topics/socialmedia'} class="navbar2_header">SMPage</Link></a>
              <a><Link to={'/learn'} class="navbar2_header"><button id="learn-button">Learn</button></Link></a>
            </div>       
          </div>

      );
    }
  }

export default NavBar;