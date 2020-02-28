import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'; 
import NavBar2 from './Components/NavBar2/NavBar2.js';
import HomePage from './Containers/HomePage/HomePage.js'
import SMLessonPage from './Containers/SMLessonPage/SMLessonPage.js'; 

function App() {
  const button_text = "Call to Action"
  return (
    <div className="App">
      <header className="App-header">
        <NavBar2/> 
        <div id="SMLessonPage">
          <SMLessonPage/> 
        </div> 
      </header>
    </div>
  );
}

export default App;
