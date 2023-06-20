import React from "react";
import "./Faq.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollButton from "./ScrollButton";

const Faqbackimage=require('../AssetsFolder/CartImage/cartbg.png');
const Faqbg={
    width: '100%',
    height: '35vh',
   backgroundImage: `url(${Faqbackimage})`,
    backgroundSize:'cover'
};

const Faq = () => {
  return (
    <>
      <Navbar/>
      <div className="container-fluid  imgbg" style={Faqbg}>
    
        <div className="container ">
          <div className="row ">
            <h1 className="text-white mt-5 pt-5">FAQ Page</h1>
            <div className='d-flex flex-row gap-2'>
            <span className='text-white'><Link to="/" className="text-white">Home</Link></span> 
            <span className='text-white'> /</span>
            <span className='text-white'><Link to="/courses" className="text-white">All Courses</Link></span>
        </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 " >
        <div className="row col-md-12 justify-content-evenly">
          <div className="col-md-3 ">
            <h1 className="fw-bold">Frequently Asked Questions</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur a elit. In ut ullam corper
              leo, eget euismod orci. Cum sociis natoque.
            </p>
            <div className="mt-5">
              <a href="#txt1" id="hov">Company Policies </a>
            </div>
            <div className="mt-3">
              <a href="#txt2">Payment Options</a>
            </div>
            <div className="mt-3">
              <a href="#txt3">Terms & Conditions</a>
            </div>
            <div className="mt-3">
              <a href="#txt4">Delivery Job</a>
            </div>
            <div className="mt-3">
              <a href="#txt5">Efficiency</a>
            </div>
            <div className="mt-3">
              <form class="d-flex">
                <input
                  class="form-control me-5 rounded-pill p-2 mt-4"
                  type="search" style={{backgroundColor:"white"}}
                  placeholder="Search"
                  aria-label="Search"
                 />
                
              </form>
            </div>
          </div>
          <div className="col-md-8  ">
            <div className="mt-2 mb-5 ">
              <h5 className="fw-bold" >
                1. Branding is simply a more efficient way to sell things?
              </h5>
              <p className="text-start mt-3 " id="txt1">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus musbulum
                ultricies aliquam convallis. Maecenas ut tellus mi. Proin
                tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus,
                vitae condimentum nulla enim bibendum nibh. Praesent turpis
                risus, interdum nec venenatis id, pretium sit amet purus.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel,
                suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel,
                tempor molestie nibh. In hac habitasse platea dictumst. Proin
                nec blandit ligula.
              </p>
            </div>

            <div className="mt-3 mt-5 pt-2">
              <h5 className="fw-bold" >
                2. It’s better to be first in the mind than to be first in the
                marketplace?
              </h5>
              <p className="text-start mt-3 "id="txt2">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus musbulum
                ultricies aliquam convallis. Maecenas ut tellus mi. Proin
                tincidunt, lectus eu volutpat mattis, ante metus lacini.
              </p>
            </div>

            <div className="mt-3 mt-5 pt-2">
              <h5 className="fw-bold">
                3. Marketing is a company’s ultimate objective?
              </h5>
              <p className="text-start mt-3 "id="txt3">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus musbulum
                ultricies aliquam convallis. Maecenas ut tellus mi. Proin
                tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus,
                vitae condimentum nulla enim bibendum nibh. Praesent turpis
                risus, interdum nec venenatis id, pretium sit amet purus.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel,
                suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel,
                tempor molestie nibh. In hac habitasse platea dictumst. Proin
                nec blandit ligula.
              </p>
            </div>

            <div className="mt-3 mt-5 pt-2">
              <h5 className="fw-bold">
                4. Positioning is what you do to the mind of the prospect?
              </h5>
              <p className="text-start mt-3 "id="txt4">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus musbulum
                ultricies aliquam convallis. Maecenas ut tellus mi. Proin
                tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus,
                vitae condimentum nulla enim bibendum nibh. Praesent turpis
                risus, interdum nec venenatis id, pretium sit amet purus.
                Interdum et malesuada fames ac ante.
              </p>
            </div>

            <div className="mt-3 mt-5 pt-2">
              <h5 className="fw-bold">
                5. Branding is simply a more efficient way to sell things?
              </h5>
              <p className="text-start mt-3 "id="txt5">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus musbulum
                ultricies aliquam convallis. Maecenas ut tellus mi. Proin
                tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus,
                vitae condimentum nulla enim bibendum nibh. Praesent turpis
                risus, interdum nec venenatis id, pretium sit amet purus.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel,
                suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel,
                tempor molestie nibh. In hac habitasse platea dictumst. Proin
                nec blandit ligula.
              </p>
            </div>

            <div className="mt-3 mt-5 pt-2">
              <h5 className="fw-bold">
                6. It’s better to be first in the mind than to be first in the
                marketplace?
              </h5>
              <p className="text-start mt-3 ">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus musbulum
                ultricies aliquam convallis. Maecenas ut tellus mi. Proin
                tincidunt, lectus eu volutpat mattis, ante metus lacini
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton/>
      <Footer/>
    </>
  );
};
export default Faq;
