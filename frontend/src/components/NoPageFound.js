import React, { useState } from "react";
import "../styles/nopagefound.css";
import { NavLink, useNavigate } from "react-router-dom";

const NoPageFound = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="main-container">
            <div className="sec-container" >
                <div className="left">
                    <h2>No Page Found</h2>
                    <p>Looks like you don't have any pages yet. Let's add a new page.</p>
                    <button type="button" onClick={()=>{navigate("/addpage")}}>+ Add Page</button>
                </div>
                <div className="right">
                    <img src="./images/nopagefound.png" alt="" srcset="" />
                </div>
            </div>
        </div>
        </>
    );
};

export default NoPageFound;