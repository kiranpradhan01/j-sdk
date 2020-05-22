import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'; 
import NavBar2 from './Components/NavBar2/NavBar2.js';
import HomePage from './Containers/HomePage/HomePage.js'; 
import MobilePage from './Containers/MobilePage/MobilePage.js'
import SMLessonPage from './Containers/SMLessonPage/SMLessonPage.js'; 
import SMLessonIntro from './Containers/SMLessonPage/SMLessonIntro.js'; 
import DataInstructions from './Components/DataInstructions/DataInstructions.js'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ModalComp from './Components/ModalComp/ModalComp.js'; 
import LandingPage from './Containers/LandingPage/LandingPage.js';  
import SMLessonContainer from './Containers/SMLessonPage/SMLessonContainer.js'; 
import LearnPage from './Containers/LearnPage/LearnPage.js'
import AboutPage from './Containers/AboutPage/AboutPage.js'; 

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
              <Route exact path='/' component={LandingPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/learn' component={LearnPage} />
              <Route path='/topics/socialmedia' component={SMLessonContainer}/> 
              <Route path='/topics/spread' component={MobilePage} />
              <Route path='/topics/seo' component={MobilePage} />
      </Switch>
      </header>
      </div>
    </Router> 
  );
}

export default App;
