import React from "react";

const Card = ({ title, image, description, button }) => {
  return (
    <div className="card mt-3 mx-2" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt="image"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {button}
        </a>
      </div>
    </div>
  );
};

export default Card;
