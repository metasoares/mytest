import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/index.js";
import { About } from "./components/About.js";
import { News } from "./components/News.js";
import { Contact } from "./components/Contact.js";
import Home from "./components/Home.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "h8k-components";

const title = "Navigation Bar";

function App() {
  return (
    <>
      <Router>
        <div>
          <h8k-navbar header={title} />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/News" element={<News />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
