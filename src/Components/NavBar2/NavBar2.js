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
            <div id="cognition"><Link to={'/'} id="cognition"> cognition </Link></div>
            <a class="navbar2_header"><Link to={'/information'} class="navbar2_header"> What we do</Link> </a> 
            <a class="navbar2_header"><Link to={'/works'} class="navbar2_header">How it works</Link></a> 
            <a class="navbar2_header"><Link to={'/about'} class="navbar2_header">About us</Link></a>
            <a class="navbar2_header"><Link to={'/topics'} class="navbar2_header">Topics</Link></a> 
        </div>

      );
    }
  }

export default NavBar;