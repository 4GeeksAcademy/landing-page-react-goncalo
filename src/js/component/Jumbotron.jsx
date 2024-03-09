import React from "react";

const Jumbotron = ({ title, description, button }) => {
  return (
    <div className="jumbotron bg-light px-3 pb-5 mx-2 mt-3">
      <h1 className="display-4">{title}</h1>
      <p>{description}</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          {button}
        </a>
      </p>
    </div>
  );
};

export default Jumbotron;
