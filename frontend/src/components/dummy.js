import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Dummy = () => {

    const [data  , setData]= useState([])
    
    const getAllData = async ()=>{
        try {
            const token = localStorage.getItem('user'); 
    if (!token) {
      console.error("JWT token is missing");
      return;
    }

    const response = await axios.get("http://localhost:5000/api/v1/page/getAllPages", {
      headers: {
        Authorization: `${token}` 
      }
    });

    if(response.data){
        setData(response.data.data)
    }
        } catch (error) {
            console.log(error);
        }
    }

    const filterDraft = data ?  data.filter((item) => item.status === "scheduled") :data
+

    console.log(filterDraft);

  return (
    <>
    <div>dummy</div>
    <button type='button' onClick={getAllData}></button>
   
    <NavLink to="/addpage">
    <button>
Add  page 
</button>
    </NavLink>
    </>
    
  )
}

export default Dummy