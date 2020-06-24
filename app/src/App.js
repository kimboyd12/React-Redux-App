import React from 'react';
import Quote from './components/Quote';
import Kanye from "./images/kanye2.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Sh*t</h4>
      <h1>K a n y e</h1>
      <h2>Says</h2>
      <Quote />
      <img src={Kanye} />
    </div>
  );
}

export default App;
