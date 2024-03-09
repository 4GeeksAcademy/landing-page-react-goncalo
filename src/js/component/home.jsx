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
      <div style={{ width: "70%", margin: "auto" }}>
        <Jumbotron />
        <div className="d-flex">
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
      <Footer />
    </div>
  );
};

export default Home;
