import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components-functional/Header';
import Counter from './components-functional/Counter';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header title={"Başlık"}></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter start={5} increment={5}/>
      </div>
    </div>
  );
}

export default App;
