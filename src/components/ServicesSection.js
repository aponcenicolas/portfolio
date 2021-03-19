import React from "react";

const ServicesSection = ({ image, title, text }) => {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">{text}</p>
        </div>
      </div>
      <h1>ServicesSection</h1>
    </div>
  );
};

export default ServicesSection;
