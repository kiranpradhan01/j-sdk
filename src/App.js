import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'; 
import informed_logo from './Logos/informed_public.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/> 
        <div id="uwcip_logo">
          <img src = {informed_logo}  alt = "center for informed public logo"/> 
        </div> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
