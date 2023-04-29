import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Projects from "./pages/Projects/Projects";
import Scroll from "./components/Scroll/Scroll";

function App() {
  return (
  <Router>
    <Navbar />
    <main>
     <About />
     <Projects />
     <Skills />
     <Contact />
    </main>
    <Scroll />

  </Router>
  );
}

export default App;
