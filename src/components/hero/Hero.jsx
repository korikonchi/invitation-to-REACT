import React from "react";
import "./Hero.scss";

export function Hero({ imgUrl = "", className = "", subHeader, groom, bride }) {
  return (
    <div>
      <img src={imgUrl} alt="bride and groom" className={`hero ${className}`} />
      <h1 className="box-text">
        <span className="fadeInRight">{groom}</span>
        <span className="fadeIn">& </span>
        <span className="fadeInLeft"> {bride}</span>
      </h1>
      <span className="fadeInUp">-- {subHeader} --</span>
    </div>
  );
}

export default Hero;
