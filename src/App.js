import React from 'react';
import { GlobalStyle } from './ui/AppStyles'
import Home from './views/Home';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Home/>
    </div>
  );
}

export default App;
