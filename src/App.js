import React from 'react';
import './App.scss';
import Header from './components/Home/Header';
import BurgerBlock from './components/Menu/BurgerBlock';

import db from "./db.json"
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Categories from './components/Menu/Categories';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="categories">
        {
          Object.keys(db).map(d => (
            <Categories item={d} />
          ))
        }
      </div>

      <Categories />
      <div className="content">
        <Route path="/menu" render={() => {
          return (
            Object.values(db).map(elements => (
              elements.map((el, index) => (
                <BurgerBlock key={index} name={el.name}
                  description={el.description} cost={el.cost} />
              ))
            ))
          )
        }} />
      </div>
    </div>
  );
}

export default App;
