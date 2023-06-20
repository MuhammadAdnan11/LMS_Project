import React from "react";
import './SpecificCourseProgressBar.css';
import { AiOutlineStar } from "react-icons/ai";


function SpecificCourseProgressBar () {
   return (
       <div className="container mt-5">
           <h5 className="widclass fs-">Reviews</h5>
           <p className="userUrl1">Our course begins with the first step for generating great user experiences: understanding what people do, think, say, and feel. In this<br/>
            module, you’ll learn how to keep an open mind while learning.</p>
           <div className="row-10 d-flex progressmedia">
           
            <div className="col-4">
                <h1 className="text-center display-1 text-warning widclass mt-5 ">5</h1>
                <p className="text-center  text-warning fw-bold"> 

                <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/>
                </p>
                <p className="text-center userUrl1">Rated 5 out of 3 Ratings</p>
            </div>

            <div className="col-6 ">
            
            <div className="skill-box">
               <span className="title">5 Stars</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">100%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">4 Stars</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">0%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">3 Stars</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">0%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">2 Stars</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">0%</span>
                   </span>
               </div>
           </div>
           
           <div className="skill-box">
               <span className="title">1 Stars</span>
               <div className="skill-bar">
                   <span className="skill-per expressjs">
                       <span className="tooltip">0%</span>
                   </span>
               </div>
           </div>
            </div>

           </div>
          
       </div>
   )
}

export default SpecificCourseProgressBar;