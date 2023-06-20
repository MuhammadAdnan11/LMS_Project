import React from "react";
// import Button from 'react-bootstrap/Button';
import "./error_page.css";
import { Link } from "react-router-dom";
const Errorbackimage = require("../AssetsFolder/error-404/404-background.png");
const Errorbg = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Errorbackimage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Error_page = () => {
  return (
    <>
      <div className="container-fluid  bgimg" style={Errorbg}>
        <div className="container">
          <div className="row align-self-center justify-content-center ">
            <img
              src="./Images/error-404/404-image.png"
              alt=""
              style={{ width: 459, height: 178 }}
              className="mt-5"
            ></img>
            <p className="text-center text-white fs-4 fw-bolder mt-4">
              Oops, seems you ventured to far out
              <br />
              into space. Here's the way back
              <br />
              home.
            </p>
            <di className="text-center">
             <Link to="/"> <button 
                className="rounded-pill text-center bg-white fw-bold mt-3 "
                id="btnstyle"
              
                style={{ height: "47px", width: "200px" }}
              >
                BACK TO HOME
              </button></Link>
            </di>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error_page;
