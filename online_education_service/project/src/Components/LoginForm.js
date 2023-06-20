
import React, { Component } from 'react'
import "./LoginForm.css"
import {MdOutlineEmail} from "react-icons/md";
import {Link } from 'react-router-dom';







export default class LoginForm extends Component {
    

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
    if(data.status=="ok"){
      alert("Login Successfully !😄")

      window.localStorage.setItem("token", data.data);
      window.localStorage.setItem("loggedIn", true);

      window.location.href="/users";
      


    }
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
            User Login
        </div>
        <form class="p-3 mt-3" onSubmit={this.handleSubmit}>
            <div class="form-field d-flex align-items-center">
            <span><MdOutlineEmail/></span>
                <input type="email" name="email" id="email" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Password"/>
            </div><br/>
            <div className="d-flex justify-content-between">
            <div className=" d-flex flex-row gap-2">
            <input type="checkbox" /><span>Remember me</span>
            </div>
            <Link to="/resetpassword">Lost your password?</Link>
            </div>
            <button type='submit' class="btn mt-3" >Login</button>
        </form>
        <div class="text-center fs-6">
            <Link to="/resetpassword">Forget password?</Link> or <Link to="/register">Sign up</Link>
        </div>
        
    </div>
    
    

    </>
  )
}

}

