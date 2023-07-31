import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selects from './components/Selects';
import Footer from './components/Footer';
// import Carousel from './components/Carousel'; 

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Hero></Hero>
       <Destinations></Destinations>
       <Search></Search>
       <Selects></Selects>
       <Footer></Footer>
    </div>
  );
}

export default App;
