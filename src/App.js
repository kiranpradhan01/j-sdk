import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'; 
import NavBar2 from './Components/NavBar2/NavBar2.js';
import HomePage from './Containers/HomePage/HomePage.js'; 
import MobilePage from './Containers/MobilePage/MobilePage.js'
import SMLessonPage from './Containers/SMLessonPage/SMLessonPage.js'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div id="NavBar"> 
          <NavBar2/>
          </div>  

          <div id="MobilePage"> 
              <MobilePage/> 
          </div>
      <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/information' component={MobilePage} />
              <Route path='/about' component={MobilePage} />
              <Route path='/works' component={MobilePage} />
              <Route path='/topics' component={SMLessonPage} />
      </Switch>
      </header>
      </div>
    </Router> 
  );
}

export default App;
