













import React , {Component} from 'react';
import "./dashboard.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFacebook } from 'react-icons/bs';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ScrollButton from './ScrollButton';
const Dashboardbackimage=require('../AssetsFolder/DashboardImage/dashboard.png');
const Dashboardbg={
    width: '100%',
    height: '35vh',
   backgroundImage: `url(${Dashboardbackimage})`,
    backgroundSize:'cover'
};





export default class Dashboard extends Component 
{
    

    constructor(props){
      super (props)
      this.state={
        email:"",
        password:"",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  
    handleSubmit(e){
      e.preventDefault();
      const {email,password}= this.state;
      console.log(email,password);
      fetch("http://localhost:5000/login" ,{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"Application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
        password,
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister");
      if(data.status==="ok"){
        alert("Login Successfully !😄")
  
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);
  
        window.location.href="/courses";
        
  
  
      }
    });
  }
  render(){
    return (
        <>
            <Navbar/>
         <div className='container-fluid  imgbg ' style={Dashboardbg}>
                <div className='container'>
                    <div className='row'>
                    <h1 className='fw-bolder text-white mt-5 pt-3  hcard' >User dashboard</h1>
                    <div className='d-flex flex-row gap-2'>
                   <span className='text-white'><Link to="/" className="text-white">Home</Link></span> 
                  <span className='text-white'> /</span>
                  <span className='text-white'><Link to="/courses" className="text-white">All Courses</Link></span>
                  </div>
                    </div>
                    
                </div>
              {/* Container End  */}
            </div>

            {/* Login */}
        
            <div className='container mt-5 pt-5 '>
                <div className='row col-md-12  justify-content-evenly'>

                    <div className='col-md-5  '>
                    <h3 className='fw-bold '>Login with your account</h3>
                    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail" style={{width:"350px"}}>
        <Form.Label className='fw-bold'><small>UserEmail*</small></Form.Label>
        <Form.Control type="email" name="email" id="email" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword"style={{width:"350px"}}>
        <Form.Label className='fw-bold'><small>Password*</small></Form.Label>
        <Form.Control type="password" name="password" id="pwd" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Password"/>
                            </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  label="Remember me" />
                                </Form.Group>
                            
     <div className=' mb-2 '>  
                        <Button type='submit' className='rounded-pill p-2 text-white' id='btncol' style={{width:"70%", height:"50px"}}>LOGIN
                        </Button>
                            </div>
                
                        </Form>     
                        <div className='d-flex' id='regcol'>
                            <p className=''><small>Not a member yet?</small></p>
                            <Link to="/register"><small>Register Now</small></Link>
                    </div>
                    </div>


                    <div className='col-md-5  mt-5 pt-5  '>
                        <h6 className='mt-5 pt-3 mb-5 text-center titcenter fw-bold'>Recommended</h6>
                       
                        <div className='row-md-12 d-flex '>
                            
                            <div className='col-md-5'>
                            <div className=' mb-2 ps-2'>  
                       <Link to="https://www.facebook.com/profile.php?id=100084137440075"> <Button className=' rounded-pill   p-2 text-white' id='fbcol' style={{width:"100%", height:"50px"}}>FACEBOOK <BsFacebook/>
                        </Button></Link>
                            </div>


                            </div>
                            <div className='col-md-6 ps-1 text-center'>
                                <p id='netfont' >Connect with Social<br/> Networks</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <ScrollButton/>
            
        <Footer/>
        
        </>
    )
}
}