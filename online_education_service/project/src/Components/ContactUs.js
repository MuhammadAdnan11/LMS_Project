import React from "react";
import "./contactUs.css";
import Form from "react-bootstrap/Form";
import { BsTelephone, BsChat, BsBuilding, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollButton from "./ScrollButton";
import { Link } from "react-router-dom";


const Contactbackimage=require('../AssetsFolder/contactUs/contact-title-img.jpg');
const Contactbg={
    width: '100%',
    height: '33.56rem',
   backgroundImage: `url(${Contactbackimage})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    backgroundPosition:'center'
};

const Contact = () => {
  return (
    
    <>
    <Navbar/>
      
      <div className="container-fluid  imgbgg" style={Contactbg}>
        
          <div className="row ">
            <h1 className=" aligntextt text-white display-3 fw-bolder  ">Contact Us</h1>
          </div>
        
      </div>

      <div className="container-fluid mt-5 mb-0 ">
        <div className="container mt-5 mb-4 pt-5">
          <div className="row  ">
            <div className="col-md-5  ">
              <h1 className="text-start">Contact Details</h1>
              <p className="text-start">
                Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum,
                facilisis vel mollis vitae, mollis nec ante. Quisque aliquam
                dictumfacilisis vel mollis vitae. Lorem ipsum dolor sit amet,
                ubique admodum euripidis has no, on luptatum nominati.
              </p>
              <h6 className="fw-bold mt-4">New York Office</h6>
               <p className="mt-3"><BsTelephone/><span className="ps-2">1-677-124-44227</span></p>
              <p> <BsChat/><span className="ps-2">esmarts@qodeinteractive.com</span></p>
              <p><BsBuilding/> <span className="ps-2">184 Main Collins Street, West Victoria</span></p>

              <h6 className="fw-bold mt-4">Hamburg Office</h6>
              <p className="mt-3"><BsTelephone/><span className="ps-2">1-677-124-44227</span></p>
              <p> <BsChat/><span className="ps-2">AdSami@qodeinteractive.com</span></p>
              <p><BsBuilding/> <span className="ps-2">184 Main Collins Street, West Victoria</span></p>
            </div>

            <div className="col-md-6 p-4 fm">
              <h4 className="fw-bold">Get in Touch</h4>
              <Form  action="https://formspree.io/f/xknadzjw" method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className="row col-md-12 mt-4">
                    <div className="col mt-3 ">
                      <Form.Control className="p-2" type="text"placeholder="Your Name" />
                    </div>
                    <div className="col mt-3 ">
                      <Form.Control
                        type="email"
                       name="email" placeholder="Your email address" className="p-2"
                      />
                    </div>
                  </div>

                  <Form.Control
                    type="address"
                    name="address"
                    placeholder="Your website address"
                    className="mt-4 mb-4 p-2"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 mt-4 p-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Your message" 
                  />
                </Form.Group>

                <button
                  className="btn mt-3  rounded-pill gap-2 text-center text-white"
                  type="submit"
                  style={{ width: "100%", height: "70px " }}
                >
                  GET IT NOW
                </button>
              </Form>
            </div>
          </div>
        </div>

        {/* Map */}
      <iframe className="mt-5 " style={{width:"100%", height:"600px"}} src="https://maps.google.com/maps?q=islamia college peshawar&t=&z=10&ie=UTF8&iwloc=&output=embed" ></iframe>

        {/* Container fluid end */}
      </div>
      <div className="container-fluid bg " >
        <div className="container mt-4">
          <div className="row col-md-12   justify-content-evenly ">
          <div className="col-md-5  mt-4 text-white ">
            <div className="row col-md-12">
              <div className="col-7 ">
                  <h6 className="fw-bold">Subscribe to Newsletter</h6>
                  <p>Get Updates for All Courses</p>
              </div>
                <div className="col-5 ">
                <Form.Control className="rounded-pill "style={{width:"100%", height:"60px"}} type="email" placeholder="Enter your email" />
              </div>
            </div>
            </div>
            <div className="col-md-3  text-white">
              <div className="d-flex mt-4">
              <h6 className="fw-bold "><span >Follow Us:</span></h6>
              <span className="ps-2 ">  <Link to="https://twitter.com/Samiull72617599?t=yK1MUmPOtjxk7_Pa0ekvjw&s=09" id="icon" ><BsTwitter className="text-white"/></Link></span>
          <span className="ps-2 ">    <Link to="https://www.instagram.com/invites/contact/?i=crfaiw42a152&utm_content=nzx7j5i"><BsInstagram className="text-white"/></Link></span>
           <span className="ps-2">   <Link to="https://www.facebook.com/profile.php?id=100084137440075"><BsFacebook className="text-white"/></Link></span>  
                </div>
                <p>Glad to hear from you!</p>
                
            </div>
            <div className="col-md-3   text-white">
              <div className="mt-4 d-flex ">
                <h6 className="fw-bold">Call Us:</h6>
                <a href="#" className="text-white">03185489480</a>
              </div>
              <p>Don't hesitate to contact us</p>
                

          </div>
          </div>
        </div>
      </div>
      <ScrollButton/>
      <Footer/>
    
      </>
  
  );
};
export default Contact;
