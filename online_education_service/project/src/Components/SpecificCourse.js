import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import { TfiTimer } from "react-icons/tfi";
import { TbBellRinging } from "react-icons/tb";
import { CiBookmarkPlus } from "react-icons/ci";
import { BsHandThumbsUp } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { Cartcontext } from "./context/Context";
import ScrollButton from "./ScrollButton";
import SpecificCourseAccordian from "./SpecificCourseAccordian";
import SpecificCourseProgressBar from "./SpecificCourseProgressBar";

const coursesbackimage = require("../AssetsFolder/AllCourses/allcoursespagebg.png");
const coursesbg = {
  width: "100%",
  height: "35vh",
  backgroundImage: `url(${coursesbackimage})`,
  backgroundSize: "cover",
};

const SpecificCourse = () => {
  const [data, setdata] = useState([]);
  const { productId } = useParams();
  const thisProduct = productsData.find(
    (prod) => String(prod.id) === productId
  );

  const fetchData = async () => {
    setdata(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <>
      <Navbar />

      <div className="container-fluid " style={coursesbg}>
        <div className="container">
          <div className="row">
            <h1 className="fw-bolder text-white mt-5 pt-3  bgcourses">
              All Courses
            </h1>
            <div className="d-flex flex-row gap-2">
              <span className="text-white">
                <Link to="/">Home</Link>
              </span>
              <span className="text-white"> /</span>
              <span className="text-white">
                <Link to="/courses">All Courses</Link>
              </span>
              <span className="text-white"> /</span>
              <span className="text-white">
                <Link to="/specificCourses">{thisProduct.course}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container marginclass ">
        <div className="row media1 " key={thisProduct.id}>
          <div className="col-10 ">
            <div className="d-flex flex-row gap-5 ">
              <h1 className="widclass1">{thisProduct.course}</h1>
              <span className="align-self-center bgspan text-white">
                ${thisProduct.price}
              </span>
            </div>

            <div className="mediaa2 d-flex  mt-5 gap-5  ">
              <div className="col-2 mediaa2 d-flex  gap-2 ">
                <img
                  src={thisProduct.image}
                  alt=""
                  style={{ width: 70, height: 70 }}
                />
                <div className="d-flex flex-column ">
                  <span>Instructor:</span>
                  <span className="userUrl">{thisProduct.instructor}</span>
                </div>
              </div>

              <div className="col-2 d-flex flex-column text-center">
                <span>Categories: </span>
                <span className="userUrl">{thisProduct.categories}</span>
              </div>

              <div className="col-2 d-flex flex-column text-center">
                <span>Reviews:</span>
                <span className="userUrl text-warning fw-bold">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </span>
              </div>

              <div className="col-2 text-center">
                <Link to="/coursecart">
                  {" "}
                  <button
                    className="btn btn-info rounded-pill text-white fw-bold buycourse"
                    onClick={() =>
                      dispatch({ type: "ADD", payload: thisProduct })
                    }
                  >
                    {" "}
                    Buy Course
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-4 ">
              <img src={thisProduct.image} alt="" className="courseImage" />
            </div>
          </div>

          <div className="col-2 textmedia">
            <h5 className=" mt-5">Course Features</h5>
            <div className="d-flex flex-column gap-3 ">
              <div className="d-flex flex-row justify-content-between mt-2">
                <span>
                  <TfiTimer className="fs-4 text-info" /> Duration
                </span>
                <span>{thisProduct.duration}</span>
              </div>

              <div className="d-flex flex-row justify-content-between">
                <span>
                  <TbBellRinging className="fs-4 text-info" /> Lectures
                </span>
                <span>{thisProduct.lecture}</span>
              </div>

              <div className="d-flex flex-row justify-content-between">
                <span>
                  <CiBookmarkPlus className="fs-4 text-info" /> Quizzes
                </span>
                <span>{thisProduct.quizzes}</span>
              </div>

              <div className="d-flex flex-row justify-content-between">
                <span>
                  <BsHandThumbsUp className="fs-4 text-info" /> Pass Percentage
                </span>
                <span>{thisProduct.percentage}</span>
              </div>

              <div className="d-flex flex-row justify-content-between">
                <span>
                  <BsHandThumbsUp className="fs-4 text-info" /> Max Retakes
                </span>
                <span>{thisProduct.maxRetake}</span>
              </div>

              <h5 className="mt-5 ">Certification</h5>
              <p className="mt-3 perDescr ">
                {thisProduct.certificateDescription}
              </p>

              <img src={thisProduct.certificate} alt="" className="img3" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-10">
            <h5 className="widclass1 fs-2">About this course</h5>
            <p className="userUrl1 d-none d-xl-block">
              Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
              tincidunt auctor a ornare odio. Sed non mauris vitae erat
              consequat auctor eu in elit. Class aptent taciti sociosquad litora
              torquent per conubia nostra, per inceptos himenaeos. Mauris in
              erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non mauris vitae erat consequat auctor eu in elit.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue. Sed non neque
              elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
              Lorem Ipsn gravida nibh vel velit auctor aliquet. Class aptent
              taciti sociosquad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit.
            </p>
            <br />

            <p className="userUrl1">
              Sed non mauris vitae erat consequat auctor en in elit. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Mauris in erat juste. Nullam ac urna eu felis
              dapibus condimentum sit amet a augue. Sed non neque ejit. Sed ut
              imperdiet nisi. Proin condimentum fermentum nunc.
            </p>
          </div>
        </div>
      </div>
      <SpecificCourseProgressBar/>
      <SpecificCourseAccordian/>
      

      <ScrollButton />

      <Footer />
    </>
  );
};

export default SpecificCourse;

// import React from "react"
// import {useParams} from "react-router-dom"
// import productsData from "./productsData"

// function SpecificCourse() {
//     const {productId} = useParams()
//     const thisProduct = productsData.find(prod =>String(prod.id) === productId)

//     return (
//         <div>
//             <h1>{thisProduct.course}</h1>
//             <p>Price: ${ thisProduct.price}</p>
//             <p>{thisProduct.description}</p>
//         </div>
//     )
// }

// export default SpecificCourse

/** @format */

// import { useContext, useEffect, useState } from "react";
// import { Cartcontext } from "./context/Context";
// import { Link } from "react-router-dom";
// const SpecificCourse = () => {
//   const [data, setdata] = useState([]);
//   const fetchData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products").then((response)=>response.json()).then(data=>{
//       setdata(data);
//     });

//     console.log(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const Globalstate = useContext(Cartcontext);
//   const dispatch = Globalstate.dispatch;
//   console.log(Globalstate);
//   return (
//     <div className="home">
//       {data.map((item, index) => {
//         item.quantity = 1;
//         return (
//           <div className="card" key={index}>
//             <img src={item.image} alt="" />
//             <p>{item.title}</p>
//             <h3>$. {item.price}</h3>
//            <Link to="/coursecart"><button onClick={() => dispatch({ type: "ADD", payload: item })}>
//               add to cart
//             </button>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SpecificCourse;
