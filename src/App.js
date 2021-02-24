import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Basket from "./components/Basket/Basket"

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/basket" component={Basket}/>

      <Route path="/menu" component={Menu} />
    </div>
  );
}

export default App;
