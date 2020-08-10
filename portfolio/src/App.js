import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";

import logo from './logo.svg';
import './pages/style.css'
import ParentComponent from './components/components'
import Main from './pages/Main';
import About from './pages/About';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <div>
    <Sidebar />
    <Router>
        <Route exact path="/">
          <Main />
          {
            /**
             * If you want test functional & class components uncomment it
             * <ParentComponent />
             */
          }
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
    </Router>
    </div>
  );
}

export default App;
