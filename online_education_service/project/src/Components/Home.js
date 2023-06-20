// import React from "react";
// import Carousel from 'react-bootstrap/Carousel';



// const Home=()=> {
//   return (
//     <>
//     <Carousel fade>
//       <Carousel.Item>
//         <img
//           className="d-block w-100 imgclass"
//           src="./Images/Homepage/slide4.jpg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
        
        
//       <form className="form-inline mt-4 mb-4  d-flex justify-content-center gap-1 searchbar">
//         <input className="form-control form-control-sm ml-5 w-50 form-control-lg rounded-pill " type="text" placeholder="Search" aria-label="Search" />
//        <button type="button" class="btn btn-col btn-sm rounded-pill searchbtn ">Search</button>
//       </form>
    
      
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 imgclass"
//           src="./Images/Homepage/slide21.jpg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//            <form className="form-inline mt-4 mb-4 d-flex justify-content-center gap-1 searchbar">
//         <input className="form-control form-control-sm ml-5 w-50 form-control-lg rounded-pill " type="text" placeholder="Search" aria-label="Search" />
//        <button type="button" class="btn btn-col btn-sm rounded-pill searchbtn">Search</button>
//       </form>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 imgclass"
//           src="./Images/Homepage/slide22.jpg"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//             <form className="form-inline mt-4 mb-4 d-flex justify-content-center gap-1 searchbar ">
//         <input className="form-control form-control-sm ml-5 w-50 form-control-lg rounded-pill " type="text" placeholder="Search" aria-label="Search" />
//        <button type="button" class="btn btn-col btn-sm rounded-pill searchbtn ">Search</button>
//       </form>
//         </Carousel.Caption>
//       </Carousel.Item>


//       <Carousel.Item>
//         <img
//           className="d-block w-100 imgclass"
//           src="./Images/Homepage/slide23.jpg"
//           alt="First slide"
//         />
//         <Carousel.Caption >
//              <form className="form-inline mt-4 mb-4 d-flex justify-content-center gap-1 searchbar t">
//         <input className="form-control form-control-sm ml-5 w-50 form-control-lg rounded-pill  " type="text" placeholder="Search" aria-label="Search" />
//        <button type="button" class="btn btn-col btn-sm rounded-pill searchbtn ">Search</button>
//       </form>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </>
//   );
// }

// export default Home;





















import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import SearchBarRes from "./HomePageSearchBar/SearchBarRes";
import SearchResultsList from "./HomePageSearchBar/SearchResultsList";


const Home=()=> {
  const [results, setResults] = useState([]);
  
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
      
        <SearchBarRes setResults={setResults}/>
        <SearchResultsList results={results}/>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide21.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         <SearchBarRes setResults={setResults}/>
         <SearchResultsList results={results}/>


        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide22.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
         <SearchBarRes setResults={setResults}/>
         <SearchResultsList results={results}/>



        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide23.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
        <SearchBarRes setResults={setResults}/>
        <SearchResultsList results={results}/>
            
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Home;