import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { Link } from "react-router-dom";







const Navbar = ({props, setShow}) => {
  
 
  return (
    <>
      <div className="container-fluid mobile-toggler d-none d-xl-block ">
        <div className="row p-3 ">
          <div className="col d-flex flex-row gap-3 align-self-center justify-content-center ">
            <h6 >WELCOME </h6>
            <h6>
              {" "}
              CALL <span className="iconcolor1">+92 316 9727859</span>
            </h6>
            <h6>FOLLOW US</h6>
            <a href="https://twitter.com/adnan191023?t=2-LnxvaGXXM4LfLpFBztjQ&s=09" target="blank">  <AiOutlineTwitter className="iconcolor1" /></a>
           <a href="https://www.instagram.com/sa.miullah194/"><FaInstagramSquare className="iconcolor1" /></a> 
           <a href="https://www.facebook.com/adnantechchannel?mibextid=ZbWKwL" target="blank"> <FaFacebookF className="iconcolor1" /></a> 
          </div>
          <div className="col d-flex namargin flex-row justify-content-end ">
          <Link to="/login" > <button
              type="button"
              className="btn btn-col btn-sm text-white rounded-pill" 
            >
              <RiAdminLine className="iconcolor" /> 
              Login 
            </button></Link>

           <Link to="/register"> <button
              type="button"
              className="btn btn-col btn-sm text-white rounded-pill"
            >
              <BsPencil className="iconcolor" /> Register
            </button></Link>
          </div>
        </div>
      </div>



      <header>
        <div className="container-fluid">
          <div className="navb-logo ">
            <img src="./Images/Oes Logo/logo8.png" alt="Logo"  style={{height:"300px", width:"300px"
            }}/>
          </div>

          <div className="navb-items d-none d-xl-flex">
          
            <div className="item">
              <Link to="/" className="nav-link">HOME</Link>
         {/* <a className="nav-link " href="/" data-bs-toggle="dropdown">HOME   </a> */}
		    {/* <ul class="dropdown-menu">
			  <li> <Link className="dropdown-item" to="/">HOME 1</Link></li>
		    </ul> */}
            </div>


             <div className="item">
             <a class="nav-link " to="#" data-bs-toggle="dropdown">COURSES</a>
		    <ul class="dropdown-menu">
			  <li><a className="dropdown-item" to="#"> FEATURERED</a></li>
         <li><Link className="dropdown-item" to="/courses"> ALL COURSES </Link></li>
        
        <li><Link className="dropdown-item" to="/dashboard"> DASHBOARD </Link></li>
        <li><Link className="dropdown-item" to="/coursevideo">Video Lectures</Link></li>  
        <li><Link className="dropdown-item" to="/admin">Admin Dashboard</Link></li>  

		    </ul>
            </div>


            <div className="item">
              <Link to="/instructor" class="nav-link">INSTRUCTOR</Link>
            {/* <Link class="nav-link " to="/instructor" data-bs-toggle="dropdown">INSTRUCTORS</Link> */}
              {/* <ul class="dropdown-menu">
                
			  <li><Link className="dropdown-item" to="/instructor">BECOME AN INSTRUCTOR</Link></li>
			  <li><a className="dropdown-item" to="#"> INSTRUCTOR SINGLE </a></li>
			  
		    </ul> */}
            </div>




            <div className="item">
            <Link to="/Events" class="nav-link">EVENTS</Link>
            {/* <a class="nav-link  " to="Events.js" data-bs-toggle="dropdown">EVENTS</a> */}
		    {/* <ul class="dropdown-menu">
			  <li><a className="dropdown-item" to="#"> EVENT CALENDER</a></li>
			  <li><a className="dropdown-item" to="#"> EVENT LIST </a></li>
			  <li><a className="dropdown-item" to="#"> EVENT SINGLE </a></li>
		    </ul> */}
            </div>

            
             <div className="item">
             <a class="nav-link " to="#" data-bs-toggle="dropdown">PAGES</a>
		    <ul class="dropdown-menu">
			  <li><Link className="dropdown-item" to="/about" > ABOUT US</Link></li>
			  <li><Link className="dropdown-item" to="/contact"> CONTACT US </Link></li>
			  <li><Link className="dropdown-item" to="/faq"> FAQ PAGE </Link></li>
			  {/* <li><Link className="dropdown-item" to="/error"> 404 ERROR PAGE </Link></li> */}
			  <li><Link className="dropdown-item" to="/gallery"> GALLERY</Link></li>
			  <li><a className="dropdown-item" to="#"> SHOP </a></li>


		    </ul>
            </div> 

            <div className="item">
            <a class="nav-link " to="#" data-bs-toggle="dropdown">ELEMENTS</a>
		    <ul class="dropdown-menu">
			  <li><a className="dropdown-item" to="#"> EDUCATION SHORTCODE</a></li>
			  <li><a className="dropdown-item" to="#"> CLASSIC </a></li>
			  <li><a className="dropdown-item" to="#"> INFOGRAPHIC </a></li>
			  <li><a className="dropdown-item"  to="#"> PRESENTATION </a></li>

		    </ul>
            </div>


            {/* <div className="item">
              <a href="/about">ELEMENTS</a>
            </div> */}

            <div className="item">
              <a href="">
                <VscSearch />
              </a>
            </div>

            <div className="item d-flex cart1">
             <Link to="/coursecart"> <span onClick={()=>setShow(false)}>
                <AiOutlineShoppingCart />
              </span></Link>
              {/* <span>0</span> */}
            </div>

            <button
              className="btn item"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <GoThreeBars />
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Online Education Service</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                Lorem ipsum dolor sit amet, conse ctetur adip elit, pellentesque
                turpis.
                <br />
                <br />
                <br />
                <br />
           <a href="https://twitter.com/Samiull72617599?s=09" target="blank">     <AiOutlineTwitter className="iconcolor2" /></a>
           <a href="https://instagram.com/muhammadadnan5882?igshid=NGExMmI2YTkyZg==" target="blank">    <FaInstagramSquare className="iconcolor2" /></a>
           <a href="https://www.facebook.com/adnantechchannel?mibextid=ZbWKwL" target="blank">    <FaFacebookF className="iconcolor2" /></a>
              </div>
            </div>
          </div>

          {/* Button trigger modal  */}
          <div className="mobile-toggler d-lg-none">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              <GoThreeBars />
            </a>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="navbModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <img src="./Images/Oes Logo/logo7.jpeg" alt="logo" />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="modal-line">
                    <AiOutlineHome classNameName="fs-1 colo " />
                    <a href="/">Home</a>
                  </div>

                  <div className="modal-line">
                    <MdOutlineMedicalServices classNameName="fs-1 colo " />
                    <a href="/services">Services</a>
                  </div>

                  <div className="modal-line">
                    <BiBookReader classNameName="fs-1 colo  " />
                    <a href="/courses">Courses</a>
                  </div>

                  <div className="modal-line">
                    <AiOutlineInsertRowAbove classNameName="fs-1 colo " />
                    <a href="#">About</a>
                  </div>

                  <a href="/contact" className="navb-button" type="button">
                    Let's talk
                  </a>
                </div>

                <div className="mobile-modal-footer">
                  <a target="_blank" href="https://twitter.com/Samiull72617599?s=09">
                    <AiOutlineTwitter className="iconcolor1" />
                  </a>
                  <a target="_blank" href="https://instagram.com/muhammadadnan5882?igshid=NGExMmI2YTkyZg==">
                    <FaInstagramSquare className="iconcolor1" />
                  </a>
                  <a target="_blank" href="https://www.facebook.com/adnantechchannel?mibextid=ZbWKwL">
                    <FaFacebookF className="iconcolor1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Navbar;
