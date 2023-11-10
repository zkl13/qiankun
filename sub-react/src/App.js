import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShadowDOMWrapper from "./ShadowDOMWrapper.jsx"
function ShowDoM () {
  return <div className='layout-header'>1234</div>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ShadowDOMWrapper/>
        {ShowDoM()}
      </header>
    </div>
  );
}

export default App;
