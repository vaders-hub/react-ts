import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import HEADER from './layout/HEADER'
import BODY from './layout/BODY'
import FOOTER from './layout/FOOTER'

function App() {
  return (
    <div className="App">
      <Router>
        <HEADER/>
        <BODY/>
        <FOOTER/>
      </Router>
    </div>
  );
}

export default App;