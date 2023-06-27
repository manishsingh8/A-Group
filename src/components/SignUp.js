import React from "react";
import "./signup.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import imgs from "../images.jpg";
import { useState,useEffect } from "react";

import validate from './Validation';

const SignUp = () => {

   const [userDetails,setUserDetails]  = useState({
    name:"",
    email:"",
    password:""
   });
   const [errors,setErrors] = useState({});
 

   const changeHandler =(e)=>{
        const {name,value} = e.target;
        setUserDetails(
          {
            ...userDetails,
            [name]:value,
        });
        console.log(userDetails);
 }


  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validate(userDetails));
    };

  return (
    <>
      <div className="signup__container">
        <div className="signup_img">
          <img src={imgs} alt="loading..." />
        </div>
        <div className="container__signup pt-3">
          <div className="inner_div">
            <h4 style={{ marginLeft: "27%" }}>Welcome!</h4>
            <p>
              Use these awesome forms to login or create <br /> new account in
              your project for free.
            </p>

            <div className="signup__form pt-1">
              <h4>Register!</h4>
              <div className="icon">
                <div className="box">
                  <span>
                    <FacebookIcon />
                  </span>
                </div>
                <div className="box">
                  <span>
                    <AppleIcon />
                  </span>
                </div>
                <div className="box">
                  <span>
                    <GoogleIcon />
                  </span>
                </div>
              </div>
              <p>or</p>
              <form onSubmit={submitHandler}>
                <div className="mt-0">
                  <label for="exampleInputEmail1" className="form-label ">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name..."
                    className="form-control input__field"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    // required
                    value={userDetails.name}
                    name="name"
                    onChange={changeHandler}
                  />
                </div>
                <p>{errors.name}</p>
                <div className="mb-3 mt-3">
                  <label for="exampleInputEmail1" className="form-label ">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email..."
                    className="form-control input__field"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    // required
                    value={userDetails.email}
                    name="email"
                    onChange={changeHandler}
                  />
                  <p>{errors.email}</p>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label ">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password..."
                    className="form-control input__field"
                    id="exampleInputPassword1"
                    // required
                    value={userDetails.password}
                    name="password"
                    onChange={changeHandler}
                  />
                </div>
                <p>{errors.password}</p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Rember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-1"
                  style={{ width: "90%", height: "auto" }}
                >
                  Register
                </button>
              </form>
              <p className="mt-3" style={{ color: "lightgray" }}>
                Already have an account
                <NavLink
                  to="/signin"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  SignIn
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
