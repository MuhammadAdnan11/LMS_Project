import React from 'react';
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdPhoneCallback } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";



 const Footer=()=> {
  return (
   
        <>
 <div class="container-fluid mt-5">
  <div class="row">
    	<div class="col-md-12">
    	    <footer class="footer">				
		<div class="container-fluid">
			<div class="row">
      <div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						About us
					</div>	
					<p class="white-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
					</p>
          <MdPhoneCallback/><span className="iconcolor1"> +92 318 5489480</span><br/>
          <BiTimeFive/><span className="iconcolor1"> Mon - Sat 8.00 - 18.00</span>
				</div>

				<div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Popular Courses
					</div>	
					<div class="footer-links">
						<a href="#">
            Academic English
						</a>
						<a href="#">
            PC Systems
						</a>
						<a href="#">
						Web Technology
						</a>
						<a href="#">
							Artifical Inteligence
						</a>
					</div>
				</div>

				<div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Support
					</div>	
					<div class="footer-links">
						<a href="#">
            Documentation
						</a>
						<a href="#">
            Forums
						</a>
						<a href="#">
            Available Courses
						</a>
						<a href="#">
            Become An Instructor
						</a>

            <a href="#">
            Events
						</a>

					</div>
				</div>

				<div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Flexible Learning
					</div>	
					<img src="./Images/Homepage/footer-map.png" alt="world-map" />

        

					<div class="footer-social-links m-t-30">
          
						<li>
							<a href="https://twitter.com/Samiull72617599?s=09" target='blank'>
								<i><AiOutlineTwitter/></i>
							</a>
							<a href="https://instagram.com/muhammadadnan5882?igshid=NGExMmI2YTkyZg==" target="blank">
								<i><FaInstagramSquare/></i>
							</a>
							<a href="https://www.facebook.com/muhammadadnan.khan.5283?mibextid=ZbWKwL" target="blank">
								<i><FaFacebookF/></i>
							</a>
							<a href="#">
								<i><BsLinkedin/></i>
							</a>
						</li>
					</div>
				</div>
			</div>
		</div>
	</footer>
  
	<div class="footer-bottom">
		<p>Copyright © 2023, All Rights Reserved by Online Education Service. "A & S"</p>
	</div>
    	</div>
	</div>
</div>



   
        </>
  );
}

export default Footer;