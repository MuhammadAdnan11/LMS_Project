import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import EventsDataApi from "./EventsDataApi";
import { useParams } from "react-router-dom";
import { GiAlarmClock, GiLouvrePyramid } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { BiTimeFive, BiBuilding } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone, BsPerson, BsGlobe } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import "./EventSpecific.css";
import Footer from "./Footer";

const coursesbackimage = require("../AssetsFolder/AllCourses/allcoursespagebg.png");
const coursesbg = {
  width: "100%",
  height: "35vh",
  backgroundImage: `url(${coursesbackimage})`,
  backgroundSize: "cover",
};

// Its for fetching data from inst Api file based on id 👇

export const EventSpecific = () => {
  const { EventId } = useParams();
  const thisEvents = EventsDataApi.find((prod) => String(prod.id) === EventId);
  // End

  return (
    <>
      <Navbar />
      {/* banner */}
      <div className="container-fluid " style={coursesbg}>
        <div className="container">
          <div className="row">
            <h1 className="fw-bolder text-white mt-5 pt-3  bgcourses">
              {thisEvents.name}
            </h1>
            <div className="d-flex flex-row gap-2">
              <span className="text-white">
                <Link to="/">Home</Link>
              </span>
              <span className="text-white"> /</span>
              <span className="text-white">
                <Link to="/events">Events</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      <div className="container mt-5 pb-5 ">
        <div className="row ">
          <div className="col-md-5 mt-5 ">
            <div className="evspHeading">
              <span>
                {" "}
                <h2 className="fw-bold"> {thisEvents.name}</h2>
              </span>
            </div>
            <div className="mt-3">
              <p >
                {" "}
               <span id="evSpecAlarm"> <GiAlarmClock /></span>
                {thisEvents.date}
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-1 ">
          <div className="col-md-5 mt-4">
            <img
              src={thisEvents.image}
              style={{ width: 545, height: 335 }}
            ></img>
          </div>
          <div className="col-md-5 mt-4 ms-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7080055318957!2d71.47309257469168!3d34.000033120487174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910d324a9cf0d%3A0xf2df847901c6501!2sIslamia%20College%20University%20Peshawar!5e0!3m2!1sen!2s!4v1687183593431!5m2!1sen!2s"
              width="545"
              height="335"
              //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="me-5 pe-5 ">
            <div className="me-5">
              <p className="text-sm-start me-5 pe-5 mt-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenasporttitor congue massa. Fusce posuere, magna sed pulvina
                ultricies, purus lectus malesuada libero, sit amet commodo magn
                eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus
                tellus. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="fw-bold mt-5">Event Details</h4>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="evparagraph mt-3">
              <span>
                <p>
                  <span className="ps-1" id="evcalIcon">
                    <SlCalender />
                  </span>
                  <span className="ps-3">Date:</span> {thisEvents.date}
                </p>
              </span>
              <span>
                <p>
                  <span className="pe-2" id="evIcon">
                    <BiTimeFive />
                  </span>
                  <span className="ps-2">Time:</span> {thisEvents.time}
                </p>
              </span>
              <span>
                <p>
                  {" "}
                  <span className="pe-2" id="evIcon">
                    <BiBuilding />
                  </span>
                  <span className="ps-2">Venue:</span> {thisEvents.venue}
                </p>
              </span>
              <span>
                <p>
                  {" "}
                  <span className="pe-2" id="evIcon">
                    <CiLocationOn />
                  </span>
                  <span className="ps-2">Address:</span> {thisEvents.address}
                </p>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="evparagraph mt-3">
              <span>
                <p>
                  <span className="pe-2" id="evcalIcon1">
                    {" "}
                    <BsPerson />
                  </span>
                  <span className="ps-2">Organizer name: </span>{" "}
                  {thisEvents.organization}
                </p>
              </span>
              <span>
                <p>
                  <span className="pe-2" id="evtelIcon2">
                    <BsTelephone />
                  </span>
                  <span className="ps-2 ">Phone: </span> {thisEvents.phone}
                </p>
              </span>
              <span>
                <p>
                  {" "}
                  <span className="pe-2" id="evIcon">
                    <AiOutlineMail />
                  </span>
                  <span className="ps-2">Email: </span>
              {thisEvents.email}
                </p>
              </span>
              <span>
                <p>
                  {" "}
                  <span className="pe-2" id="evIcon">
                    <BsGlobe />
                  </span>
                  <span className="ps-2">Website: </span>
                  {thisEvents.website}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
