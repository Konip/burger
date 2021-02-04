import React from 'react';
import BurgerBlock from './components/BurgerBlock';
import Button from './components/Button';
import Header from './components/Header';
import db from "./db.json"
import './App.css';


function App() {
  return (
    <div className="App">
      <Header>
        <Button />
      </Header>
      {
        db.map(d => (
          <BurgerBlock props={d[0]} />
        ))
      }

    </div>
  );
}

export default App;
