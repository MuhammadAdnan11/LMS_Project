

import React, { Component } from 'react'
import "./LoginForm.css"
import {MdOutlineEmail} from "react-icons/md";
import { Link } from 'react-router-dom';




export default class ResetPassword extends Component {
    

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
    const {email}= this.state;
    console.log(email);
    fetch("http://localhost:5000/forgot-password" ,{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"Application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      email,
    }),
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data,"userRegister");
    alert(data.status);
    
      
  });
}
  

   
render(){
  return (
    <>
    
		<div class="wrapper">
        <div class="logo">
            <img src="./Images/Registeration/signIn.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            Forgot Password
        </div>
        <form class="p-3 mt-3" onSubmit={this.handleSubmit}>
            <div class="form-field d-flex align-items-center">
            <span><MdOutlineEmail/></span>
                <input type="email" name="email" id="email" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email"/>
            </div>
            
            <button type='submit' class="btn mt-3" >Submit</button>
            <div class="text-center fs-5">
            <Link to="/login">Sign In</Link>
        </div>
        </form>
        
    </div>
	

    </>
  )
}

}

