

/** @format */

import { useContext , useState } from "react";
import { Cartcontext } from "./Components/context/Context";
import "./CoursesCart.css";
import { Link } from "react-router-dom";
// import StripeContainer from './Components/StripeContainer';

import Navbar from "./Components/Navbar";

const CoursesCart = () => {
  const [showItem, setShowItem] = useState(false);
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return +total+ +item.price ;
  }, 0);
  return (
    <>
    <Navbar/>
    
    <div className="cart d-flex flex-column p-5 gap-2 ">
      {state.map((item, index) => {
        return (
          
          
          <div className="card d-flex flex-row " key={index}>
            
            <img src={item.image} alt="" style={{width:"150px", height:"150px"}} className="imgcart"/>
           
            <div className="carde">
            
            <p>{item.course}</p>
            <p className="userUrl">{item.instructor}</p>
            </div>
            <p>${item.price}</p>
            {/* <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </button>
            </div> */}
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })} className="">
              x
            </h2>
          </div>
          
          
          
          
          

          
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>total=${total}</h2>
				
        <Link to="/stripe"><button className="btn btn-sm rounded-pill " onClick={() => setShowItem(true)}>CheckOut Now</button></Link>
					
          
        </div>
      )}
   
    </div>

    
	{/* {showItem ? (
				<StripeContainer />
			) : (
				<>
					<button onClick={() => setShowItem(true)}>Purchase Spatula</button>
				</>
			)} */}
 
 </> );
};

export default CoursesCart;