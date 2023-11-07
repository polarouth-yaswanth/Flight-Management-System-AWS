import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="homecontainer">
            <div className="navigation-home">
              <a href="/home">Home</a>
              <a href="/admindashboard">admindashboard</a>
              <a href="/userdashboard">userdashboard</a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h1 className="greet"><i><b>Welcome to Oman Airlines!</b></i></h1>
            </div>
        </div>
        
         
      </div>
    );
  }
}