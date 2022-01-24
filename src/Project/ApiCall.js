import React,{useState,useEffect} from "react";

const handleClick =() =>{
    // e.preventDefault();
}
const ApiCall =()=>{  
    const[name ,setName]=useState("");  
    
 return(
<div>
  <input type="text" placeholder="city name" name={name} />
  <button type="submit" onClick={handleClick}> find </button>

</div>


 );
}
export default ApiCall;