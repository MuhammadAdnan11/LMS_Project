import React, { useEffect, useRef, useState } from 'react'
import App_Bar from './App_Bar'
import Header from './Header'
import {BsTrash} from "react-icons/bs";
import ReactPaginate from 'react-paginate';
import "../../Dash.css";




const UsersDetail = () => {

    const [data, setData] = useState([]);
    const [limit, setLimit]= useState(11);
    const [pageCount, setPageCount]= useState(1);
    const currentPage=useRef();



    useEffect(()=>{
      currentPage.current=1;
       getAllUser();
       getPaginatedUsers();
    },[]);

    const getAllUser=()=>{
        fetch("http://localhost:5000/getAllUser" ,{
            method:"GET",
           
          })
          .then((res)=> res.json())
          .then((data)=>{
              console.log(data, " user Data")
              setData(data.data);
          });
    }

    const deleteUser=(id,name)=>{
        if(window.confirm(`Are you sure you want to delete ${name}`)){

            fetch("http://localhost:5000/deleteUser" ,{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"Application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        userid:id,
      }),
    })
    .then((res)=>res.json())
    .then((data)=> {
        alert(data.data);
        getAllUser();

    });

        }else{

        }
        
    }

    function handlePageClick(e){
      console.log(e);
      currentPage.current=e.selected+1;
      getPaginatedUsers();
      
    }
    function changeLimit(){
      currentPage.current=1;
      getPaginatedUsers();
    }

    function getPaginatedUsers(){
      fetch(`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}` ,{
        method:"GET",
       
      })
      .then((res)=> res.json())
      .then((data)=>{
          console.log(data, " user Data")
          setPageCount(data.pageCount)
          setData(data.result);
      });
    }

  return (
    <>

<div className="bgcolor23">
        <App_Bar />
       
        <div className="d-flex">
          <Header />
            <div className='container marginclass'>
            <div className='row mt-2 '>
                <table className='table settingquery'>
                <thead class="thead-dark">
              <tr>
             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">UserType</th>
             <th scope="col">Delete</th>

              </tr>
              </thead>

                    {data.map(i=>{
                        return(
                            
                            <tbody>
                      <tr>
                
                     <td>{i.fname}</td>
                   <td>{i.email}</td>
                   <td>{i.userType}</td>
                   <td> <BsTrash onClick={()=>deleteUser(i._id, i.fname)} style={{cursor:"pointer"}}/></td>

                   </tr>
                  </tbody>
                        )
                    })}


                </table>
                <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            forcePage={currentPage.current-1}
      />
      <div className='text-center'>
      <input placeholder='Enter Limit' size={17} onChange={e=>setLimit(e.target.value)}/>
      <button onClick={changeLimit} className='btnLimit'>Set Limit</button>
      </div>
            </div>

            </div>
          </div>
          </div>
    </>
  )
}

export default UsersDetail






