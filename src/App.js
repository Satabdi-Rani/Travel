import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Hero></Hero>
       <Destinations></Destinations>
    </div>
  );
}

export default App;
