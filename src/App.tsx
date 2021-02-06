import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components-functional/Header';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header title={"Başlık"}></Header>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
