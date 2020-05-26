import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CreateAccount } from './components/CreateAccount';
import { ViewAccounts } from './components/ViewAccounts';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/create" component={CreateAccount}></Route>
        <Route exact path="/view" component={ViewAccounts}></Route>
      </div>
    </Router> 
  );
}

export default App;
