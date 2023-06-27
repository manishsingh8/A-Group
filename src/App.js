import React from "react";
import './App.css';
import { Route,Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";


const App = () =>{

    return(
        <>
        <div className="main">
      
       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Home />} />
            
          </Routes>

          </div>
        </>
        
    );
}

export default App;