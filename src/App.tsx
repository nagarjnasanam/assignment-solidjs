import type { Component } from 'solid-js';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Recipes from './pages/Recipes'
import { Router, Routes, Route, Link } from "solid-app-router";


const App: Component = () => {
  return (
    <div >
      
      <Navbar/>
     
     <Router>
     <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/recipes" element={<Recipes />} />
          
          </Routes>
     </Router>
      <Footer />
    </div>
  );
};

export default App;
