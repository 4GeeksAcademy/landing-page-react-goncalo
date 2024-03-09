import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar title="Start Bootstrap" />
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <Jumbotron
              title="A Warm Welcome!"
              description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. It uses utility classes for typography and spacing to space content out within the larger container."
              button="Call to Action"
            />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="d-lg-flex">
              <Card
                image="https://storage.needpix.com/rsynced_images/gray-box-background.jpg"
                title="Card title"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                button="Find out more!"
              />
              <Card
                image="https://storage.needpix.com/rsynced_images/gray-box-background.jpg"
                title="Card title"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                button="Find out more!"
              />
              <Card
                image="https://storage.needpix.com/rsynced_images/gray-box-background.jpg"
                title="Card title"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                button="Find out more!"
              />
              <Card
                image="https://storage.needpix.com/rsynced_images/gray-box-background.jpg"
                title="Card title"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                button="Find out more!"
              />
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
