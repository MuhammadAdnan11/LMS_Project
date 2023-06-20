
import React ,{Component, useState} from 'react'
import "./LoginForm.css"
import {MdOutlineEmail} from "react-icons/md";
// import {useNavigate} from 'react-router


export default function Register(){
const [fname, setFname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [userType, setUserType] = useState("");
const [secretKey, setSecretKey] = useState("");

 

   const handleSubmit=(e)=>{
    if(userType=="Admin" && secretKey!="191014191022"){
      e.preventDefault();

      alert("Invalid Admin");
    }
    else{

      e.preventDefault();
  console.log(fname,email,password);
  fetch("http://localhost:5000/register" ,{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"Application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      fname,
      email,
      password,
      userType,
    }),
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data,"userRegister")
    if(data.status=="ok"){
      alert("User Registered Successfully! 😍")
      window.location.href="/login";
    }
    else{
      alert("something went wrong");
    }
   


  })

    }
  
};



    

  return (
    <>

<div class="wrapper">
        <div class="logo">
            <img src="./Images/Registeration/register2.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            User Registration
        </div>
        <div className='d-flex gap-2 mt-2 marginregister'>
        Register As
          <input type="radio" name="userType" value="User" onChange={(e)=>setUserType(e.target.value)} />User
          <input type="radio" name="userType" value="Admin" onChange={(e)=>setUserType(e.target.value)} />Admin

        </div>
        <form class="p-3 mt-3 " onSubmit={handleSubmit}>
        {userType=="Admin"?
           <div class="form-field d-flex align-items-center">
           <span class="fas fa-key"></span>
                <input type="text" name="text" id="text" onChange={(e)=>{setSecretKey(e.target.value)}} placeholder="Secrete Key"/>
            </div>
               : null }
        
            <div class="form-field d-flex align-items-center ">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" onChange={(e)=> setFname(e.target.value)} placeholder="Username"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span><MdOutlineEmail/></span>
                <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Confirm Password"/>
            </div>
            
            <button type='submit' class="btn mt-3" >Register</button>
        </form>
        
    </div>
	
 


    </>
    
  )
  }


