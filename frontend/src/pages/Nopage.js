import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NoPageFound from "../components/NoPageFound";

const NoPage = () => {

    // const [date , setDate] =useState('')

    // console.log(date);

    return(

        <>
        <div className="nopage" style={{display:"flex"}}>
            <Sidebar/>
            <NoPageFound/>

            {/* <input type="datetime-local" name="" id="" onChange={(e)=>setDate(e.target.value)}/> */}
        </div>
    </>
        );
};

export default NoPage;