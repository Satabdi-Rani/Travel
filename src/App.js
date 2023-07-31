import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Hero></Hero>
       <Destinations></Destinations>
       <Search></Search>
    </div>
  );
}

export default App;
