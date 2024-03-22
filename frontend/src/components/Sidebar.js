import React, { useState } from "react";
import "../styles/sidebar.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {

    const navigate = useNavigate();

    const checkWherego =async e => {
        e.preventDefault();
        try {
            const res = await axios.get("http://localhost:5000/api/v1/page/getAllPages",{
                headers: {
                  Authorization: localStorage.getItem("user"),
                },
              });
            if (res.data.data.find((item)=> item.status == "published")) {
                navigate('/ListingPublishedBlogs')
            } else {
                navigate('/nopage')
            }
        } catch (error) {
            
        }
    }
    return(
        <>
        <div className="navbar bg-light" >
        <div className="top">
        <NavLink to="#"><img src="/images/logo.png" alt="hhhh" /></NavLink>
        <NavLink to="#" onClick={checkWherego}><img src="/images/menu.png" alt="" /></NavLink>
            <hr />
        <NavLink to="/listingpage"><img src="/images/library.png" alt="" /></NavLink>
        </div>
        <div className="bottom">
        <NavLink to="#"><img src="/images/bell.png" alt="" /></NavLink>
        <NavLink to="#"><img src="/images/profile.png" alt="" /></NavLink>
        </div>
        </div>
        </>
    );
}

export default Sidebar;