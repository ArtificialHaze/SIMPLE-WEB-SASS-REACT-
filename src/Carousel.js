import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Carousel.scss";
import { Data } from "./Data";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <div className="carousel-main">
      <div className="arrows">
        <ArrowLeftOutlined
          onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
          className="left"
        />
        <ArrowRightOutlined
          onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
          className="right"
        />
      </div>
      {Data.map((slide, index) => {
        <div className={index === current ? "carousel active" : "carousel"}>
          {index === current && (
            <div className={slide.className}>
              <div className="text">
                <p className={"title"}>{slide.title}</p>
                <p>{slide.text}</p>
              </div>
              <img src={slide.image} alt={slide.title} />
            </div>
          )}
        </div>;
      })}
    </div>
  );
};

export default Carousel;
