import React from 'react';
import './App.css';
import Routes from './Routes';
import firebase, { provider } from './firebase';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
