// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// // import { useEffect } from 'react';
// // import axios from 'axios';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function UserData() {

//     // useEffect(()=>{
//     //     const fetchdata = async ()=>{
//     //         const data = await axios.get("/registeration");
//     //         console.log("user data is >>>" , data);
//     //     }
//     //     fetchdata();

//     // },[])
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }







import React,{ useEffect, useState} from "react";

import App from "../../App";
import Profile from "./Profile";
// import Profile from "./Profile";


 export default function UserData(){
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

 
  
   useEffect(()=>{

    fetch("http://localhost:5000/userData" ,{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"Application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userData");
      if(data.data.userType=="Admin"){
        setAdmin(true);
      }
      setUserData(data, "userData");
    
    });
  
 },[])

    
      return (
        <>
        
          
          {admin ? <Profile/>  :<App />}
          

        </>
      );
    }
  