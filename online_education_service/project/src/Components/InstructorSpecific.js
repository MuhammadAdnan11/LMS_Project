import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import InstructorDataAPI from "./InstructorDataAPI";
import "./InstructorSpecific.css";

import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import Footer from "./Footer";
import ScrollButton from "./ScrollButton";

const coursesbackimage = require("../AssetsFolder/AllCourses/allcoursespagebg.png");
const coursesbg = {
  width: "100%",
  height: "35vh",
  backgroundImage: `url(${coursesbackimage})`,
  backgroundSize: "cover",
};

// Its for fetching data from inst Api file based on id 👇

const InstructorSpecific = () => {
  const { InstructorId } = useParams();
  const thisInstructor = InstructorDataAPI.find(
    (prod) => String(prod.id) === InstructorId
  );
  // End

  return (
    <>
      <Navbar />
      {/* banner */}
      <div className="container-fluid " style={coursesbg}>
        <div className="container">
          <div className="row">
            <h1 className="fw-bolder text-white mt-5 pt-3  bgcourses">
              {thisInstructor.name}
            </h1>
            <div className="d-flex flex-row gap-2">
              <span className="text-white">
                <Link to="/">Home</Link>
              </span>
              <span className="text-white"> /</span>
              <span className="text-white">
                <Link to="/instructor">Instructor</Link>
              </span>
              <span className="text-white"> /</span>
              <span className="text-white">
                <Link to="/specificCourses">{thisInstructor.profession}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      <div className="container">
        <div className="row-md-12 mt-5 d-flex mediaquery ">
          <div className="col-md-3 mt-2 mb-2  px-3">
            <div>
              <img
                src={thisInstructor.image}
                style={{ width: 251, height: 256 }}
                alt
                className="img3"
              />
            </div>
            <div className="mt-5">
              <span>
                {" "}
                <h4 className="fw-bold widclass1">{thisInstructor.name}</h4>
              </span>
              <span className="span1 ">{thisInstructor.profession}</span>
              <br />
              <br />
              <span className="span2"> {thisInstructor.description}</span>
              <div className="d-flex flex-row gap-2 mt-3 ">
                <span className="span3">
                <a href="https://twitter.com/adnan191023?t=2-LnxvaGXXM4LfLpFBztjQ&s=09" target="blank"> <AiOutlineTwitter className="fs-4 widclass1 iconcolor1" />{" "}</a> 
                <a href="https://www.facebook.com/muhammadadnan.khan.5283?mibextid=ZbWKwL" target="blank">  <FaFacebookF className="fs-4 widclass1 iconcolor1" />{" "}</a>
                <a href="https://instagram.com/muhammadadnan5882?igshid=NGExMmI2YTkyZg==" target="blank"> <TiSocialInstagram className="fs-4 widclass1 iconcolor1" /></a>
                </span>
              </div>
            </div>
          </div>

          <div className="vl d-none d-xl-block"></div>

          <div className="col-md-6 mt-5 mediaquery">
            <h3 className="widclass1">Hello! This is my story.</h3>
            <p className="mt-3 perDescr fs-6">
              Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
              sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
              tincidunt auctor a ornare odiseo sitamet.
            </p>
            <br />

            <p className="perDescr fs-6">
              Nunc suscipit est fermentum, volutpat velit id, ultrices mauris.
              Nunc iaculis efficitur vehicula. Suspendisse malesuada urna et
              turpis luctus dapibus. Donec ex felis, auctor quis suscipit non,
              volutpat nec erat et turpis luctus.
            </p>
            <div className="d-flex gap-4 mt-5 justify-content-center icp">
              <img src={thisInstructor.certificate1} alt="" className="img2" />
              <img src={thisInstructor.certificate3} alt="" className="img2" />
              <img src={thisInstructor.certificate2} alt="" className="img2" />
            </div>
          </div>

          <div className="vl  d-none d-xl-block"></div>
          <div className="col-md-2 mt-5 ">
            <h3 className="widclass1 education">My Education</h3>
            <div className="d-flex flex-column">
              <h6 className="mt-1 p-2 ">{thisInstructor.unih1}</h6>
              <span className="p-2 fontsize">{thisInstructor.unip1}</span>

              <h6 className="mt-1 p-2 ">{thisInstructor.uni2h1}</h6>
              <span className="p-2 fontsize">{thisInstructor.uni2p1}</span>

              <h6 className="mt-1 p-2  ">{thisInstructor.uni3h1}</h6>
              <span className="p-2 fontsize">{thisInstructor.uni3p1}</span>

              <h3 className="mt-4 widclass1 education">My Experience</h3>
              <h6 className="mt-1 p-2 ">{thisInstructor.experience1h1}</h6>
              <span className="p-2 fontsize">
                {thisInstructor.experience1p1}
              </span>

              <h6 className="mt-1 p-2 ">{thisInstructor.experience2h1}</h6>
              <span className="p-2 fontsize">
                {thisInstructor.experience2p1}
              </span>
            </div>
          </div>
        </div>
      </div>

      <ScrollButton />
      <Footer />
    </>
  );
};

export default InstructorSpecific;
