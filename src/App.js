import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './Components/About';
import { Router, createHistory, createMemorySource, LocationProvider } from '@reach/router';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {

  let source = createMemorySource('/mysite/');
  let history = createHistory(source);

  return (
    <div className="container">
      <LocationProvider history={history}>
        <Header />
        <Nav />
        <Router>
          <About path="/mysite/" />
          <Skills path="/mysite/skills" />
          <Projects path="/mysite/projects"/>
          <Contact path="/mysite/contactme" />
        </Router>
        <Footer />
      </LocationProvider>
    </div>
  );
}

export default App;
