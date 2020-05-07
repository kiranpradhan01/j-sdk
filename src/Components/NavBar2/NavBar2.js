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
            <div id="cognition"><Link to={'/'} id="cognition"> Cognition </Link></div>
            <a class="navbar2_header"><Link to={'/about'} class="navbar2_header"> About Us</Link> </a> 
            <a class="navbar2_header"><Link to={'/goals'} class="navbar2_header">Our Goal</Link></a> 
            <a class="navbar2_header"><Link to={'/contact'} class="navbar2_header">Contact</Link></a>
            <div class="navbar2_header" id="dropdown">
              <div> Topics </div>
              <div class="dropdown-content">
                <a><Link to={'/topics/socialmedia'} class="lessons">Social Media</Link></a>
                <a><Link to={'/topics/spread'} class="lessons">Spread of Information</Link></a>
                <a><Link to={'/topics/seo'} class="lessons">SEO</Link></a>
              </div>
            </div>         
          </div>

      );
    }
  }

export default NavBar;