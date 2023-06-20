import React from 'react'
import { SlCalender } from 'react-icons/sl';
import { BiTimeFive, BiBuilding } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import "./EventsCard.css";
import { Link } from 'react-router-dom';
export const EventsCard = (props) => {
  return (
      <>
    
    <div className='container mt-5 '>
    <div className='row '>
      <div className='col-md-5'>
      {/* <a href='#'><img src={props.image} alt='' style={{ width: "500px", height: "310px" }}></img></a> */}
      <Link to={`/eventspecific/${props.id}`}><img src={props.image} alt='' style={{ width: "500px", height: "310px" }}></img></Link>
     
          </div>
      <div className='col-md-5'>
                      <h1 className='evheading fw-bold '>{props.name}</h1>
                      <div className='evparagraph mt-3'>
                          <span >
                              <p >
                             <span className='pe-2'id='evcalIcon' > <SlCalender /></span>    
                                  {props.date}</p></span>
                          <span><p >
                              <span className='pe-2'id='evIcon'><BiTimeFive/></span>
                              {props.time}</p></span>
                      <span><p >  <span className='pe-2'id='evIcon'><BiBuilding/></span>{props.venue}</p></span>
                      <span><p >  <span className='pe-2'id='evIcon'><CiLocationOn/></span>{props.address}</p></span>
                      <span><p >{props.details}</p></span>
                     
                    
                          
                      </div>
                
      </div>
    </div>
  </div>
      
      </>
  )
}
