import React from 'react';
import './App.css';
import Login from "./Login/Login.container"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>

        <Route path="/Login" component={Login}></Route>

      </Router>
    </div>
  );
}

export default App;
