import React from 'react';
import "./cart.css";
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Cartbackimage=require('../AssetsFolder/CartImage/cartbg.png');
const Cartbg={
    width: '100%',
    height: '35vh',
   backgroundImage: `url(${Cartbackimage})`,
    backgroundSize:'cover'
};

const Cart = () => {
    return (
        <>
            <Navbar/>
            <div className='container-fluid  imgbg ' style={Cartbg}>
                <div className='container'>
                    <div className='row'>
                    <h1 className='fw-bolder text-white mt-5 pt-3  hcard' >Cart</h1>
                    <div className='d-flex flex-row gap-2'>
                    <span className='text-white'><Link to="/">Home</Link></span> 
                   <span className='text-white'> /</span>
                   <span className='text-white'><Link to="/courses">All Courses</Link></span>
                  </div>
                    </div>
                    
                </div>
               
            </div>
            <div className='container  mt-5 '>
                <div className='row  justify-content-center pt-5 mb-4' style={{ height: "100px" , width:"100%"}}>
                        <div className='col-md-5'>
                        <p className='text-center mt-4 fs-2 fw-bold'>Your cart is currently empty.</p>
                        <hr/>
                    </div>
                </div>
                <div className='row justify-content-center pt-5 mt-4'style={{height:"100px"}}>
                    <div className='col-md-5 text-center '>
   
                        
                        <Button className='rounded-pill btncol p-2 ' size="lg" style={{width:"180px", height:"50px"}}> RETURN TO SHOP
                        </Button>
                     </div>
                    </div>
            </div>
           <Footer/>
        </>
    )
}
export default Cart;