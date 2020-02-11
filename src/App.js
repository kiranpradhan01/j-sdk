import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'; 
import HomePage from './Containers/HomePage/HomePage.js'

function App() {
  const button_text = "Call to Action"
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/> 
        <div id="HomePage">
          <HomePage/> 
        </div> 
      </header>
    </div>
  );
}

export default App;
