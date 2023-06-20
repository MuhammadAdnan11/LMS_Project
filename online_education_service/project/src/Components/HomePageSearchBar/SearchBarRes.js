import React,{useState} from 'react'

// https://jsonplaceholder.typicode.com/users
// https://samiullah191014.github.io/MyApi/MyAPI.json
const SearchBarRes = ({setResults}) => {
    const [input , setInput] = useState("");
  const fetchData=(value)=>{
    fetch("https://samiullah191014.github.io/MyApi/MyAPI.json")
    .then((response)=>response.json())
    .then((json)=>{
      const results = json.filter((user)=>{
        return (
        value &&
         user && 
         user.instructor && 
         user.instructor.toLowerCase().includes(value) 

        );
      });
      setResults(results)
    });
    
  };
  const handleChange=(value)=>{
    setInput(value)
    fetchData(value)
  }
  return (
    <>
         
         <form className="form-inline mt-4 mb-4 d-flex justify-content-center gap-1 searchbar">
        <input className="form-control form-control-sm ml-5 w-50 form-control-lg rounded-pill " type="text" placeholder="Search" aria-label="Search" value={input} onChange={(e)=> handleChange(e.target.value)}/>
       <button type="button" class="btn btn-col btn-sm rounded-pill searchbtn">Search</button>
      </form>
    </>
  )
}

export default SearchBarRes