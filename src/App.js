import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' Component={Services}/>
          <Route path='/products' Component={Products}/>
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
