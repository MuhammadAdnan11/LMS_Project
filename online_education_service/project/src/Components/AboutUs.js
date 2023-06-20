import React ,{useState} from 'react'
import Navbar from ".././Components/Navbar";
import ".././Components/AboutUs.css"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {GrCheckmark} from "react-icons/gr";
import Footer from ".././Components/Footer"
import ScrollButton from ".././Components/ScrollButton";

 
const Aboutbackimage=require('../AssetsFolder/AboutUs/about.jpg');
const Aboutbg={
    width: '100%',
    height: '33.56rem',
   backgroundImage: `url(${Aboutbackimage})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    backgroundPosition:'center'
};



const AboutUs=({className, ...rest})=> {
  const [viewPortEntered,setViewPortEntered] = useState(false)
  return (
    <>
    <Navbar/>

    <div className="container-fluid " style={Aboutbg}>
      <div className="row ">
      <h1 className=" aligntext text-white display-3 fw-bolder">About Us</h1>
      </div>
    </div>

         {/* 2nd section of the about page 👇 */}

    <div className="container marginclass " data-aos="zoom-in">
    <div className="row">
        <span className="text-center colo2 fs-4 fw-bolder">Guaranteed Success</span>
        <h1 className="text-center fw-bold widclass display-4">Our Services</h1>
        <p className="text-center fs-5">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,facilisis vel<br/>
             mollis vitae, mollis nec ante. Quisque aliquam dictum condim.
        </p>
    </div>
</div>


{/* 3rd section of about us page 👇 */}

   <div className="container marginclass" data-aos="zoom-in">
    <div className="row d-flex flex-row text-center">
      <div className="col HoverDiv">
        <img src="./Images/AboutUs/about1.png" alt="" />
        <h3 className="iconcolor1">Notification & Emails</h3>
        <p>Lorem ipsum dolor sit<br/> 
        ametcon, sectetur adipiscing <br/>
        elit. Phasellus vehic sagittis<br/>
         euismod.</p>
      </div>

      <div className="col HoverDiv">
        <img src="./Images/AboutUs/about2.png" alt="" />
        <h3 className="iconcolor1">Certification</h3>
        <p>Phasellus vehic sagittis<br/> 
        euismod. Lorem ipsum dolor <br/>
        elit. Phasellus vehic sagittis<br/>
         euismod.</p>
      </div>

      <div className="col HoverDiv">
        <img src="./Images/AboutUs/about3.png" alt="" />
        <h3 className="iconcolor1">Europe Campus</h3>
        <p>Lorem ipsum dolor sit<br/> 
        ametcon, sectetur adipiscing <br/>
        elit. Phasellus vehic sagittis<br/>
         euismod.</p>
      </div>

    </div>
   </div>


   {/* next section of about us page start here 👇 */}

   <div className="container-fluid bgsection marginclass" data-aos="zoom-in">
    <div className="container ">
      <div className="row d-flex flex-row ">
        <div className="col marginclass">
          <img src="./Images/HomePageCard/courseimg2.jpg" alt=""  className="img-fluid d-none d-sm-block"/>
        </div>
        <div className="col marginclass ">
        
          <h1 className=" text-center text-white fw-bolder ">Lorem ipsum dolor set amet consecteture elit amengt st.</h1>
           <p className="text-center text-white text-bold fs-4 mt-3">Proin ac lobortis arcu,abcd vestibulum augue.
            Vivamus ipsum neque, facilisis vel molis
             vitae, mollis nec ante. Quisque condim center jan.</p>

             <div className="d-flex flex-row gap-5  mt-4">
             <div className="d-flex flex-column">
             <strong data-number="89" className=" text-white text-bolder display-3" >
                    <CountUp {...rest} start ={ viewPortEntered ? null:0} end={89}>
                    {({countUpRef})=>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange ={isVisible =>{
                                if(isVisible){
                                    setViewPortEntered(true);
                                }
                            }}

                            delayedCall
                            >
                            <span className='number' ref={countUpRef}/>
                            </VisibilitySensor>
                        )
                    }}
                    </CountUp>
                </strong>
                <span className=" text-white fw-bolder fs-3"> Sheduled Events</span>
             </div>

             <div className="d-flex flex-column">
             <strong data-number="56" className=" text-white text-bolder display-3" >
                    <CountUp {...rest} start ={ viewPortEntered ? null:0} end={56}>
                    {({countUpRef})=>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange ={isVisible =>{
                                if(isVisible){
                                    setViewPortEntered(true);
                                }
                            }}

                            delayedCall
                            >
                            <span className='number' ref={countUpRef}/>
                            </VisibilitySensor>
                        )
                    }}
                    </CountUp>
                </strong>
                <span className=" text-white  fw-bolder fs-3"> Available Courses</span>
                </div>
             </div>
             

        </div>

      </div>
    </div>
   </div>



   {/* next section of about us page start here 👇 */}
       
       <div className="container marginclass " data-aos="zoom-in">
        <div className="row  gap-5 ">
          <div className="col d-flex flex-column mt-4 ">
          
            <span className="colo2">What We Do</span>
            <span className=" fs-5 widclass fw-bold mt-5 iconcolor1">Education Centre</span>
            <span className=" fs-5 widclass fw-bold mt-5 iconcolor1">We’re Already There</span>
            <span className=" fs-5 widclass fw-bold mt-5 iconcolor1">Your Financial Bridge</span>
            <span className=" fs-5 widclass fw-bold mt-5 iconcolor1">Word-Class Experts</span>
          </div>

          <div className="col-6 d-flex flex-column ">
          
            <span className="colo2 ">Our Difference</span>
            <h1 className="text-bold widclass fs-1 mt-2">What We Do</h1>
            <p className="fs-5 widclass mt-2">Proin ac lobortis arcu, a vestibulum augue. Vivamus<br/> 
            ipsum neque, facilisis vel mollis vitae, mollis nec ante.</p>
            <p className="mt-3 widclass"><GrCheckmark className="iconcolor4"/> Lorem ipsum dolor sit amet consectetur adipiscing</p>
            <p className="mt-3 widclass"><GrCheckmark  className="iconcolor4"/> Nulla ante eros, venenatis vel malesuada sit amet</p>
            <p className="mt-3 widclass"><GrCheckmark  className="iconcolor4"/> Lorem ipscras maximus turpis eget erat</p>
            <p className="mt-3 widclass"><GrCheckmark  className="iconcolor4"/> Vestibulum vitae libero neque</p>

          </div>
          

          <div className="col  marginclass text-center ">
            <img src="./Images/AboutUs/about4.jpg" alt="" style={{width:180,height:180}} className="mt-5"/>
          </div>

         
        </div>
       </div>
       


       {/* new section of about us page start here 👇 */}


       <div className="container marginclass " data-aos="zoom-in">
    <div className="row">
        <span className="text-center colo2 fs-4 fw-bolder">Research & Pedagogy</span>
        <h1 className="text-center fw-bold widclass display-4">How It Works?</h1>
        <p className="text-center fs-5">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,facilisis vel<br/>
             mollis vitae, mollis nec ante. Quisque aliquam dictum condim.
        </p>
    </div>
</div>



{/* new section of about us page start here 👇 */}


 
<div className="container marginclass " data-aos="zoom-in">
  <div className="row " >
    <div className="col text-center">
      <img src="./Images/AboutUs/about5.png" alt="" />
      <h2 className="text-center widclass mt-3">Facility</h2>
      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <div className="col text-center">
       <img src="./Images/AboutUs/about6.png" alt="" style={{width:220,height:220}}/>
      <h2 className="text-center widclass mt-3">E-Learning</h2>
      <p>Nulla ante eros, venenatis vel malesuada sit amet luctus.</p>
    </div>

    <div className="col text-center">
       <img src="./Images/AboutUs/about7.png" alt="" />
      <h2 className="text-center widclass mt-3">Kid's Courses</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <div className="col text-center">
       <img src="./Images/AboutUs/about8.png" alt="" />
      <h2 className="text-center widclass mt-3">Best Students</h2>
      <p>Nulla ante eros, venenatis vel malesuada sit amet luctus.</p>
    </div>

  </div>
</div>
<Footer/>
<ScrollButton/>

    </>
  )
}

export default AboutUs