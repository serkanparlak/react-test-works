import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components-functional/Header';
import Counter from './components-functional/Counter';
import Clock from './components-class/Clock';
import Numbers from './components-class/Numbers';
import Alt from './components-functional/Alt';
import Ust from './components-functional/Ust';
import { UserProvider } from './contexts/UserContext';
import User from './components-class/User';
import UserWrapper from './components-class/UserWrapper';

function App() {
  const nmbrs = [
    { id: 1, number: 5 },
    { id: 2, number: 6 },
    { id: 3, number: 7 }
  ]

  const [numbers, setNumbers] = useState(nmbrs);

  const removeNumber = (id: number) => {
    setNumbers(numbers.filter(x => x.id !== id));
  }


  return (
    <div className="App">
      <div className="App-header">
        {/* <Header title={"Başlık"}></Header> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter start={5} increment={5} />
        <br />
        <Clock times={['10:32', '22:00']} />
        <br />
        <Numbers numbers={numbers} removeNumber={removeNumber} />
        <Ust
          alt={<Alt key="514" link="asds"></Alt>}
        ></Ust> */}
        <UserProvider>
          <UserWrapper />
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
