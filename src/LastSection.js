import React from "react";
import "./LastSection.scss";

const LastSection = () => {
  return (
    <section className="last-section">
      <div className="center-text">
        <h1>Good gifts made esay</h1>
      </div>
      <div className="expressions">
        <div className="expression">
          <div className="gift">
            <img src="" alt="" />
          </div>
          <p>Lorem, ipsum.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="expression">
          <div className="gift">
            <img src="" alt="" />
          </div>
          <p>Lorem, ipsum.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="expression">
          <div className="gift">
            <img src="" alt="" />
          </div>
          <p>Lorem, ipsum dolor.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, obcaecati?
          </p>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
