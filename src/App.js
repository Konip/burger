import React from 'react';
import './App.scss';
import Header from './components/Home/Header';
import BurgerBlock from './components/Menu/BurgerBlock';

import db from "./db.json"
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <div className="App">
        <Navbar />
        
      <div className="content">
        <Route path="/menu" render={() => {
          return (
            Object.values(db).map(elements => (
              elements.map((el, index) => (
                <BurgerBlock key={index} name={el.name}
                  description={el.description} image={el.cost} />
              ))
            ))
          )
        }} />


      </div>
    </div>
  );
}

export default App;
