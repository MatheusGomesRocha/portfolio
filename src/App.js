import React, { useState, useEffect } from 'react';

import './globals.scss';

import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

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

    useEffect(() => {
        window.onscroll = () => {
            console.log(window.pageYOffset);
            if(window.pageYOffset >= 220) {
              setShowTitle(true);
            } 
            if (window.pageYOffset >= 300) {
              setShowLine(true);
            } 
            if (window.pageYOffset >= 600) {
              setShowContent(true);
            } 
            if (window.pageYOffset >= 1100) {
              setShowTitleProject(true)
            } 
            if (window.pageYOffset >= 1300) {
              setShowLineProject(true);
            } 
            if(window.pageYOffset >= 1600) {
              setShowProjectsArea(true);
            } 
            if(window.pageYOffset >= 1850) {
              setShowTitleContact(true);
            } 
            if(window.pageYOffset >= 1900) {
              setShowLineContact(true);
            }
            if(window.pageYOffset >= 2050) {
              setShowForm(true);
            }
        }
    }, []);

  return (
    <div>
      <Introduction />

      <About showTitle={showTitle} showLine={showLine} showContent={showContent} />

      <Projects showTitleProject={showTitleProject} showLineProject={showLineProject} showProjects={showProjectsArea} />

      <Contact showTitleContact={showTitleContact} showLineContact={showLineContact} showFormContact={showForm} />
    </div>
  );
}

export default App;
