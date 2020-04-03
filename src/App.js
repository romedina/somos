import React from 'react';
import {Body} from './components/Body/Body';
import ReactGA from 'react-ga'

// google analitycs
ReactGA.initialize('UA-162708338-1')
ReactGA.pageview(window.location.pathname)

function App() {
  return (
    <div className="App">
      <Body/>
    </div>
  );
}

export default App;
