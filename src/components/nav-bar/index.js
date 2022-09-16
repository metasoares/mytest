import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div
        className="layout-row justify-content-around align-items-center mt-20 links"
        data-testid="navigation-tabs"
      >
        <NavLink to="/">
          <a className="cursor-pointer">Home</a>
        </NavLink>
        <NavLink to="/News">
          <a className="cursor-pointer">News</a>
        </NavLink>
        <NavLink to="/Contact">
          <a className="cursor-pointer">Contact</a>
        </NavLink>
        <NavLink to="/About">
          <a className="cursor-pointer ">About</a>
        </NavLink>
      </div>
    </div>
  );
}
