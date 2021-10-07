import React from 'react';

import './globals.scss';

import Introduction from './components/Introduction';
import About from './components/About';

function App() {
  
  // function handleScroll () {
  //   alert('olá mundo');
  // }

  // onScroll={handleScroll}

  return (
    <div>
      <Introduction />

      <About  />
    </div>
  );
}

export default App;
