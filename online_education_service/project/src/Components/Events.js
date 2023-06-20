import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { EventsCard } from './EventsCard';
// import evt1 from "../Images/EventsDataApi/event-single-1.jpg";
import evt1 from "../AssetsFolder/EventsDataApi/event-single-1.jpg";
import evt2 from "../AssetsFolder/EventsDataApi/event-single-11.jpg";
import evt3 from "../AssetsFolder/EventsDataApi/event-single-2.jpg";
import evt4 from "../AssetsFolder/EventsDataApi/event-single-22.jpg";
import evt5 from "../AssetsFolder/EventsDataApi/event-single-3.jpg";
import evt6 from "../AssetsFolder/EventsDataApi/event-single-4.jpg";
import evt7 from "../AssetsFolder/EventsDataApi/event-single-6.jpg";
import evt8 from "../AssetsFolder/EventsDataApi/event-single-7.jpg";
import evt9 from "../AssetsFolder/EventsDataApi/event-single-77.jpg";
import evt10 from "../AssetsFolder/EventsDataApi/event-single-44.jpg";
import Footer from './Footer';
const gallerybackimage=require('../AssetsFolder/Gallery/title-area-background.png');
const gallerybg={
  width: '100%',
    height: '35vh',
  backgroundImage: `url(${gallerybackimage})`,
  backgroundSize:'cover'
};



const Events = () => {
  return (
      <>
      <Navbar />
      <div className='container-fluid' style={gallerybg}>

                <div className='container '>
                    <div className='row'>
                    <h1 className='fw-bolder text-white mt-5 pt-3  hcard' >Events Calendar</h1>
                    <div className='d-flex flex-row gap-2'>
                  <span className='text-white'><Link to="/" className="text-white">Home </Link></span> 
                {/* <span className='text-white'> /</span>
               <span className='text-white'><Link to="/courses" className="text-white">All Courses</Link></span> */}
              </div>
                    </div>
                    
                </div>
         
      </div>
      

      {/* Events Cards */}
      <EventsCard
        id="1"
        image={evt4}
        name={"Team Building"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
      
      <EventsCard
        id="2"
        image={evt2}
        name={"Networking Day"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
      
      <EventsCard
        id="3"
        image={evt3}
        name={"Open Door Days"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
       <EventsCard
        id="4"
        image={evt4}
        name={"Personal Tutoring"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
       <EventsCard
        id="5"
        image={evt5}
        name={"Friendship Day"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
       <EventsCard
        id="6"
        image={evt7}
        name={"Children Day"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
       <EventsCard
        id="7"
        image={evt6}
        name={"Team Building"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
       <EventsCard
        id="8"
        image={evt8}
        name={"Team Building"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
       <EventsCard
        id="9"
        image={evt9}
        name={"Team Building"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
      />
       <EventsCard
        id="10"
        image={evt10}
        name={"Team Building"}
        date={"Date: 17.01.2024 @ 9:00 am"}
        time={"Time: 9:00 am - 9:00 am"}
        venue={"Venue:Harvard Education"}
        address={"Address: Cambridge, MA 03243, USA"}
        details={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. "}
        
        />
<Footer/>
      </>
  )
}
export default Events;