


import React from 'react'
import App_Bar from './App_Bar'
import Header from './Header'
import HbarChart from './Charts/HbarChart'
import GeoChart from './Charts/GeoChart'
import PieChart from './Charts/PieChart'
import CountUp from 'react-countup';


const Analytics = () => {
  return (
    <>
       <div className="bgcolor23">
         <App_Bar />
         <div className="d-flex">
           <Header />

           <div className='container marginclass'>
           <div class="row  mt-1 settingquery">
            <div className='col-lg-4  col-12  d-flex flex-row  gap-1'>
            <div className=' cardsmall'>
            <div class="card gradient heightone" >
             <div class="card-body ">
             <div className='d-flex flex-column'>
                  <span className='text-white'> Visitors</span> 
                  <span className='text-white'> 
            <CountUp delay={0.2} end={22000} duration={.3} />
                  
                  </span>   
                  <span className='text-white'> Since last week</span>   
                </div>
             </div>
           </div>

           <div class="card gradient heightone" >
             <div class="card-body">
             <div className='d-flex flex-column'>
                  <span className='text-white'> Visitors</span> 
                  <span className='text-white'> 
            <CountUp delay={0.3} end={24000} duration={.3} />
                  
                  </span>   
                  <span className='text-white'> Since last week</span>   
                </div>
             </div>
           </div>
           </div>

           <div className='cardsmall '>
           <div class="card gradientlight heightone" >
             <div class="card-body">
             <div className='d-flex flex-column'>
                  <span className='text-white'> Visitors</span> 
                  <span className='text-white'> 
                 <CountUp delay={0.2} end={11000} duration={.3} />
                  
                  </span>   
                  <span className='text-white'> Since last week</span>   
                </div>
             </div>
           </div>

           <div class="card gradientlight" >
             <div class="card-body heightone">
             <div className='d-flex flex-column '>
                  <span className='text-white'> Visitors</span> 
                  <span className='text-white'> 
               <CountUp delay={0.4} end={54000} duration={.3} />
                  
                  </span>   
                  <span className='text-white'> Since last week</span>   
                </div>
             </div>
           </div>
           </div>
           
            </div>

            
            <div className='col-8 '>
            <div class="card colwidthcl2 " >
             <div class="card-body">
              <HbarChart/>
                
             </div>
           </div>
           </div>
    

           </div>

           <div className='row settingquery'>
            <div className='col-8'>
            <div class="card colwidthcl2" >
             <div class="card-body">
              <GeoChart/>
                
             </div>
           </div>
            </div>

            <div className='col-4'>
            <div class="card colwidthcl2" >
             <div class="card-body">
              <PieChart/>
                
             </div>
           </div>
            </div>

           </div>
           
           </div>



           </div>
           </div>
           

    </>
  )
}

export default Analytics