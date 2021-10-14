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

      <div className="modifiers">
        <p><b>Modifiers:</b></p>
        <p><b>Public:</b> any class, function or object can access and edit.</p>
        <p><b>Private:</b> only the same class can access and edit.</p>
        <p><b>Protected:</b> can be accesses and edited by the same class and the subclasses.</p>
        <p><b>ReadOnly:</b> can be edited only by the same class and accessed by anyone.</p>
        <p><b>Abstract:</b> can be used only as a model to other subclasses.</p>
      </div>

      <div className="accessors">
        <p><b>Accessors:</b></p>
        <p><b>Get:</b> read information. { "Ex: get getLevel(): void ( return this.level )" }.</p>
        <p><b>Set:</b> edit information. { "Ex: set setLevel(level: number) ( this.level = level )" } .</p>
      </div>
        
      </header>
    </div>
  );
}

export default App;
