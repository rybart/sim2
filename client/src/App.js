import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path = '/dashboard' component = { Dashboard }/>
            <Route path = '/Header' component = { Header }/>
            
            <Route path = '/' component = { Login }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
