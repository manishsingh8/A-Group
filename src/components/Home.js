import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./home.css";
import img from "../images.jpg";
import Navbar from "./Navbar";
import Form from "../form/Form";

const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="inner">
          <div className="img">
            <img
              src={img}
              style={{ height: "100vh", width: "50vw" }}
              alt="jfakf"
            />
          </div>
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
