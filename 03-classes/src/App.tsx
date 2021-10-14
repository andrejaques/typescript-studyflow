import React from 'react';
import logo from './logo.svg';
import './App.css';

import Class01 from './components/Class01';
import HeritageClass from './components/HeritageClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Class01/>

        <HeritageClass/>

        <p>Missing:</p>
        <p>Modifiers: Public, Private, Protected, ReadOnly</p>
        <p>Accessors: Get and Set</p>
        
      </header>
    </div>
  );
}

export default App;
