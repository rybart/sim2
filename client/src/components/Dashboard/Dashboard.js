import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (
      <div className="page">
      <div className="dashboardCont">
      <Header/>
      <Link to='/wizard/1'>
        <button className="newProperty">Add new property</button>
      </Link>
      <div className="filterContent">
        <p>List properties with "desired rent" greator than: $</p>
        <input type="text" className="desiredRent"/>
        <button className="filter">Filter</button>
        <button className="reset">Reset</button>
      </div>
      <div className="homeListings">
        <p>Home Listings</p>
      </div>
      <div className="dashboardPropCont">
        <div className="grey">
          <div className="imgContainer">
            <img src="" alt="home" className="propertyImg"/>
          </div>
          <div className="propertyDescription">
            <div className = 'parent'>
              <div className = 'child'>
                <p className="propertyName"></p>
                <p className="propertydescription"></p>
              </div>
            </div>
          </div>
          <div className="propDetail">
            <div className="anotherDiv">
            <p className="loan">Loan:$</p>
            <p className="monthyMortgage">Monthly Mortgage:$</p>
            <p className="recommendedRent">Recommended Rent:$</p>
            <p className="desiredRent">Desired Rent:$</p>
            <p className="address">Address:</p>
            <p className="city">City:</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAPRJREFUOBHVks0KQUEYhoeV8lOSlegkP1nbuAPZ2NkpO1txBzYWlLKwsnUBbsKGrWLB5pRQygXYeD46pzOnCTt565kz7zvfzDRnRqlfqMCmE8h8sXmKmjHInKfqtGdwg1estWncERpaimmBDbKqX3GCLXT8A47v0tlBwgn4hmAJQ09m7A5IVxCBICxgDgFwpRk3VWpG34ID5KAGd/go2WkDN4iZqqXApCZhFGTyyFRgyqqEFyhCGNYg536rMqNXqHiq5A/LVfQ8mdbN4k4gj8EvuVsb5K41JXF7aGupbvJYOYK7sHOOvl5ndBbpFEoyKi/jD/QAHqIgGPWMguQAAAAASUVORK5CYII=" alt="" className="deleteButton"/>
          </div>
          </div>
          </div>
        </div>
      </div>
        
      </div>
    );
  }
}

export default Dashboard;