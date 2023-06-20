import React from 'react'
import { useNavigate } from 'react-router-dom';


const Logout = () => {
 const history = useNavigate();
  

  
const logout=()=>{
    window.localStorage.clear();
    // window.location.href="/login";
    history("/login")
}

  return (
    <>

{/* <button type="submit">LogOut</button> */}
  <span className='btn btn-sm-primary' onClick={logout}>LogOut</span>

    </>
  )
}

export default Logout