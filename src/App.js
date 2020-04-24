import React from 'react';
import './App.css';
import Login from '.Login/Login.container.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Link to="/login"> login </Link>
          <Route path="/login" component={Login} />

        </Router>


      </header>
    </div>
  );
}

export default App;
