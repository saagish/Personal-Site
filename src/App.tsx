import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from "./components/Biography";
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Biography/>
      <Footer/>
    </div>
  );
}

export default App;
