import React from 'react';
import './App.css';
import Login from "./Login/Login.container.js"
import Data from "./data/Data.container.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>

        <Route exact path="/" component={Login}></Route>
        <Route path="/data" component={Data}></Route>

      </Router>
    </div>
  );
}

export default App;
