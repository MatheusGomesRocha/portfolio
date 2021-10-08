import React, { useState, useEffect } from 'react';

import './globals.scss';

import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';

function App() {
    const [showTitle, setShowTitle] = useState(false);
    const [showLine, setShowLine] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const [showTitleProject, setShowTitleProject] = useState(false);
    const [showLineProject, setShowLineProject] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            console.log(window.pageYOffset);
            if(window.pageYOffset >= 220) {
                setShowTitle(true);
            } if (window.pageYOffset >= 300) {
                setShowLine(true);
            } if (window.pageYOffset >= 600) {
                setShowContent(true);
            } if (window.pageYOffset >= 1100) {
              setShowTitleProject(true)
            } if (window.pageYOffset >= 1200) {
              setShowLineProject(true);
            }

        }
    }, []);

  return (
    <div>
      <Introduction />

      <About showTitle={showTitle} showLine={showLine} showContent={showContent} />

      <Projects showTitle={showTitleProject} showLine={showLineProject} />
    </div>
  );
}

export default App;
