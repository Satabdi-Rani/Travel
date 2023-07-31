import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selects from './components/Selects';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Hero></Hero>
       <Destinations></Destinations>
       <Search></Search>
       <Selects></Selects>
    </div>
  );
}

export default App;
