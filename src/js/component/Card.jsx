import React from "react";

const Card = ({ title, image, description, button }) => {
  return (
    <div className="card mt-3 mx-2" style={{ width: "95%" }}>
      <img src={image} className="card-img-top" alt="image" />
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
