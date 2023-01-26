import React from "react";

const ServicesCard = ({ name, description, icon }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{name}</h4>
        <p className="service-text">{description}</p>
      </div>
    </article>
  );
};

export default ServicesCard;
