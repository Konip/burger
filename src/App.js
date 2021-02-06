import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />

      <Route exact path="/" render={() => {
        return (
          <Home />
        )
      }} />

      <Route path="/menu" render={() => {
        return (
          <Menu />
        )
      }} />
    </div>
  );
}

export default App;
