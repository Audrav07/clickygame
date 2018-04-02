import React from "react";
import "./navbar.css";

const NavBar = props => (
  <nav>
    <ul>
      <li className="brand animated fadeIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="mess">{props.message}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default NavBar;