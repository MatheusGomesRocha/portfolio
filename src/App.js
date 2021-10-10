import React, { useState, useEffect } from 'react';

import './globals.scss';

import Introduction from './components/Introduction';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [showTitle, setShowTitle] = useState(false);
    const [showLine, setShowLine] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const [showTitleProject, setShowTitleProject] = useState(false);
    const [showLineProject, setShowLineProject] = useState(false);
    const [showProjectsArea, setShowProjectsArea] = useState(false);

    const [showTitleContact, setShowTitleContact] = useState(false);
    const [showLineContact, setShowLineContact] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const [fixedHeader, setFixedHeader] = useState(false);
    const [currentComponent, setCurrentComponent] = useState('home');

    useEffect(() => {
        window.onscroll = () => {
            const windowHeight = window.pageYOffset;

            if(windowHeight >= 220) {
              setShowTitle(true);
            } 
            if (windowHeight >= 300) {
              setShowLine(true);
            } 
            if (windowHeight >= 600) {
              setShowContent(true);
            }
            if(windowHeight < 850 ) {
              setFixedHeader(false);
              setCurrentComponent('home');
            }
            if(windowHeight >= 850) {
              setFixedHeader(true);
              setCurrentComponent('about')
            } 
            if (windowHeight >= 1100) {
              setShowTitleProject(true)
            } 
            if (windowHeight >= 1300) {
              setShowLineProject(true);
            } 
            if(windowHeight >= 1600) {
              setShowProjectsArea(true);
            } 
            if(windowHeight >= 1730) {
              setCurrentComponent('projects')
            }
            if(windowHeight >= 1850) {
              setShowTitleContact(true);
            } 
            if(windowHeight >= 1900) {
              setShowLineContact(true);
            }
            if(windowHeight >= 2050) {
              setShowForm(true);
            }
            if(windowHeight >= 2400) {
              setCurrentComponent('contact');
            }
        }
    }, []);

  return (
    <div>
      <Introduction />

      <Header fixedHeader={fixedHeader} currentComponent={currentComponent} />

      <About showTitle={showTitle} showLine={showLine} showContent={showContent} />

      <Projects showTitleProject={showTitleProject} showLineProject={showLineProject} showProjects={showProjectsArea} />

      <Contact showTitleContact={showTitleContact} showLineContact={showLineContact} showFormContact={showForm} />

      <Footer />
    </div>
  );
}

export default App;
