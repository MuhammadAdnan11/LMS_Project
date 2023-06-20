import React from 'react'
import "./gallery.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ScrollButton from './ScrollButton';
const gallerybackimage=require('../AssetsFolder/Gallery/title-area-background.png');
const gallerybg={
  width: '100%',
    height: '35vh',
  backgroundImage: `url(${gallerybackimage})`,
  backgroundSize:'cover'
};


const Gallery=()=> {
  return (

  <>
  

      <Navbar/>

       

       <div className='container-fluid' style={gallerybg}>

                <div className='container'>
                    <div className='row'>
                    <h1 className='fw-bolder text-white mt-5 pt-3  hcard' >Gallery</h1>
                    <div className='d-flex flex-row gap-2'>
                  <span className='text-white'><Link to="/" className="text-white">Home</Link></span> 
                <span className='text-white'> /</span>
               <span className='text-white'><Link to="/courses" className="text-white">All Courses</Link></span>
              </div>
                    </div>
                    
                </div>
         
            </div>

      <div className='container mt-5  '>
        <div className='row d-flex gap-2 flex-row  justify-content-center   box'>
          <img className='pb-4 ' src="./Images/Gallery/gallery-img-1.jpg" alt="" style={{ width: 265, height: 230 }}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-2.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-3.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-4.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-5.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-6.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-7.jpg" alt="" style={{ width: 265, height: 230 }}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-8.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-9.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-10.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-11.jpg" alt="" style={{ width: 265, height: 230}}></img>
          <img className='pb-4' src="./Images/Gallery/gallery-img-12.jpg" alt="" style={{ width: 265, height: 230}}></img>
          </div>
          
        </div>
      <ScrollButton/>
      <Footer/>


    </>
  )
}


export default Gallery
