import React from "react";
import "./nav-bar/index.css";

const Home = () => {
  return (
    <div className="layout-column justify-content-center align-items-center ">
      <div className="card w-20 ma-0 ">
        <section className="card-text" data-testid="tab-content">
          <span>HOME PAGE</span>
        </section>
      </div>
    </div>
  );
};

export default Home;
