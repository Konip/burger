import React from 'react';
import './App.scss';
import { Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Basket from "./components/Basket/Basket"
import Footer from './components/Footer/Footer';
import Vacancies from './components/Vacancies/Vacancies';
import News from './components/News/News';
import Tomsk from './components/News/Tomsk';
import Double from './components/News/Double';
import BRO from './components/News/BRO';
import {start} from '../src/back/index.js'

function App() {
  let { pathname } = useLocation();

  React.useEffect(() => {
    // fetch('http://localhost:3000/burger')
    //   // .then(res => res.json())
    //   .then(res => { 
    //     console.log(res);
    //   })
    start()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/basket" component={Basket} />
      <Route path="/menu" component={Menu} />
      <Route path="/news" component={News} />
      <Route exact path="/tomsk" component={Tomsk} />
      <Route exact path="/double" component={Double} />
      <Route exact path="/bro" component={BRO} />
      <Route path="/vacancies" component={Vacancies} />
      {pathname !== '/basket' &&
        <Footer pathname={pathname} />
      }
    </div>
  );
}

export default App;
