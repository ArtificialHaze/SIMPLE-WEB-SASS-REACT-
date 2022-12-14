import React from "react";
import "./Section.scss";

const Section = () => {
  return (
    <section className="main-section">
      <div className="content">
        <h1>Warm and cozy.</h1>
        <button>Discover more</button>
      </div>
      <div className="bottom">
        <p>20% off for all products</p>
      </div>
    </section>
  );
};

export default Section;
