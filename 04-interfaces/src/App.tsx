import React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">

      <FirstComponent />

      <UserComponent name="Andre Jaques" age={30} address="Swiss Alpes - One Day - CH" dob={new Date()} />


    </div>
  );
}

export default App;
