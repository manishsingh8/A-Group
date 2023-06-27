import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { NavLink } from "react-router-dom";

const Form = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="inner__div">
          <form onSubmit={submitHandler}>
            <h3>Nice to see you</h3>
            <h6>Enter your mail and password to signin</h6>
            <div className="mb-3 detail">
              <label for="exampleInputEmail1" className="form-label ">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter Email..."
                className="form-control input_field"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3 detail">
              <label for="exampleInputPassword1" className="form-label ">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password..."
                className="form-control input_field"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="form-check form-switch detail">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                Rember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 detail"
              style={{ width: "50%", height: "auto" }}
            >
              SignIn
            </button>
          </form>
          <p className="mt-4 detail" style={{ color: "lightgray" }}>
            Don't have an account
            <NavLink
              to="/signup"
              style={{ color: "white", textDecoration: "none" }}
            >
              SignUp
            </NavLink>
          </p>

          <p className="footer">
            © 2023,Mode with❤️ by Simmple & Creative Tim for a better Web{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
