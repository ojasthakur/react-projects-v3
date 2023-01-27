import React from "react";

const ToursCards = ({
  image,
  date,
  title,
  description,
  location,
  duration,
  price,
}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default ToursCards;
