import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import "./AllCourses.css"
import {CiStar} from "react-icons/ci";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {CiGrid42} from "react-icons/ci";




const coursesbackimage=require('../AssetsFolder/AllCourses/allcoursespagebg.png');
const coursesbg={
    width: '100%',
    height: '35vh',
    backgroundImage: `url(${coursesbackimage})`,
    backgroundSize:'cover'
};

const AllCoursesGrid = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const [users, setUsers] = useState([]);



  const getUsers = async () => {
      const response = await fetch("https://samiullah191014.github.io/MyApi/MyAPI.json");
      const FinalData = await response.json();
      setUsers(FinalData)
  }



  useEffect(() => {
      getUsers();
  }, [])


  return (
    <>

    <Navbar/>
      
      <div className='container-fluid ' style={coursesbg}>
      <div className='container'>
        <div className='row'>
        <h1 className='fw-bolder text-white mt-5 pt-3  bgcourses' >All Courses</h1>
        <div className='d-flex flex-row gap-2'>
        <span className='text-white'><Link to="/">Home</Link></span> 
        <span className='text-white'> /</span>
        <span className='text-white'><Link to="/courses">All Courses</Link></span>
        </div>

        </div>
      </div>
      </div>




      


      <div class="container mt-5">

<div className="row height d-flex justify-content-center align-items-center">

  <div className="col-md-8">

    <div className="search">
      <i className="fa fa-search"></i>
      <input type="text" className="form-control rounded-pill" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search for course"/>
      
    </div>
    
  </div>
  
</div>
</div>



<div className='container'>
           <div class=" ">
            <Link to="/courses" class=" btn-default btn-sm "><span class="glyphicon glyphicon-th-list ">
            </span><AiOutlineUnorderedList className='fw-bolder fs-4'/></Link> <Link to="/grid" class=" btn-default btn-sm "><span
                class="glyphicon glyphicon-th "></span><CiGrid42 className='fw-bolder fs-4'/></Link>
           </div>
           </div>


      
      <div className='container mt-5 ' >
      
      {users.filter((val)=>{
                if (searchTerm === ""){
                    return val 
                }
                else if (val.course.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
               }).map((curElem) => {
                       return (
          <div className='row  justify-content-center '>
        <div className='col-md-4 col-md-6 '>
        <Link to={`/specificCourse/${curElem.id}`}><img src={curElem.image} alt="" style={{width:400,height:220}}/></Link>
        </div>

        <div className='col-md-4 col-md-6 '>
        <Link to={`/specificCourse/${curElem.id}`}><div>{curElem.course}</div></Link>
        <div>{curElem.instructor}</div>
                                   
       <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis.</p>
        <div className='d-flex flex-row justify-content-between'>
        <p className='rating'><CiStar className='fs-5'/>{curElem.Rating} Ratings </p>
       <span className='bgspan'>{curElem.price}</span>
       </div>

        </div>

        </div> 
      
      

                       )}
                   )
                   
      }
      </div>
       



        
                

      
      
    <Footer/>

</>
  )
}

export default AllCoursesGrid;