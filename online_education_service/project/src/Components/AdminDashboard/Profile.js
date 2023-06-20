import React from "react";
import App_Bar from "./App_Bar";
import Header from "./Header";
import { AiOutlineIdcard } from "react-icons/ai";
import "../../Dash.css";
import BarChart from "./Charts/BarChart";
import AccordianDash from "./AccordianDash";
import CountUp from 'react-countup';



const Profile = () => {
  return (
    <>
      <div className="bgcolor23">
        <App_Bar />
       
        <div className="d-flex">
          <Header />
          <div className="container marginclass">
            <div className="row settingquery">
              <div className="col-4  ">
                <div class="card mt-2 gradient colwidthcl" >
                  <div class="card-body d-flex flex-column">
                    <span className="iconstyle fs-3">
                      <AiOutlineIdcard />
                    </span>
                    <span className="text-white fs-6 fw-bold">
                    $ <CountUp delay={0.2} end={500} duration={.3} />
                    
                    </span>
                    <span className="text-white ">Total Earning</span>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div class="card mt-2 gradientlight colwidthcl" >
                  <div class="card-body d-flex flex-column">
                    <span className="iconstyle fs-3">
                      <AiOutlineIdcard />
                    </span>
                    <span className="text-white fs-6 fw-bold">
                  $ <CountUp delay={0.2} end={900} duration={.3} />

                    </span>
                    <span className="text-white ">Total Orders</span>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex flex-column">
                <div
                  class="card mt-2 setheight gradientlight colwidthcl"
                  
                >
                  <div class="card-body d-flex flex-row gap-2">
                    <span className="iconstyle1 text-white fs-3">
                      <AiOutlineIdcard />
                    </span>
                    <div className="  d-flex flex-column mt-2">
                      <span className="text-white paddingall1 fs-6 fw-bold">
                        230k
                      </span>
                      <span className="text-white ">Total Earning</span>
                    </div>
                  </div>
                </div>

                <div class="card mt-2 setheight colwidthcl" >
                  <div class="card-body d-flex flex-row gap-2">
                    <span className="iconstyle1 text-black fs-3">
                      <AiOutlineIdcard />
                    </span>
                    <div className="  d-flex flex-column mt-2">
                      <span className="text-black paddingall1 fs-6 fw-bold">
                        310k
                      </span>
                      <span className="text-black ">Total Earning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row mt-2 d-flex settingquery">
                <div className="col-8">
                <div class="card colwidthcl1" style={{ height:"440px" }}>
                  <div class="card-body">
                    <BarChart/>
                  </div>
                </div>
                </div>

                <div className="col-4">
                   <div class="card accordheight colwidthcl " style={{ height:"440px" }}>
                  <div class="card-body">
                    <AccordianDash/>
                  </div>
                </div>
                </div>

            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
