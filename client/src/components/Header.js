import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png'

class Header extends Component {
  render() {
    return (
      <div className="fullHeader">
      <div className="Header">
        <div className = 'leftContainer'>
        <img src={logo} alt="" height = "28" width = "34" className = 'logo'/>
        <h1 className="houser">Houser</h1>
        <h1 className="dashboard">Dashboard</h1>
        </div>
        <div className="right container">
        <p className = 'headerLogout'>Logout</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;