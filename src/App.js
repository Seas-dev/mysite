import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './Components/About';
import { Router } from '@reach/router';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {

  return (
    <div className="container">
      <Header />
      <Nav />
      <Router>
        <About path="/mysite" />
        <Skills path="/skills" />
        <Projects path="/projects"/>
        <Contact path="/contactme" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
