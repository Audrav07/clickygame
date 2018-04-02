import React from "react";
import "./navbar.css";

const NavBar = props => (
  <nav>
    <ul>
     
      

      <li id="mess">{props.message}</li>

      <li id="cur-sco">Current Score: {props.score}</li>
 <li className="brand animated fadeIn">
      <img src="./images/logo.png" alt="logo" id="logo" />
       
      </li>
      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default NavBar;