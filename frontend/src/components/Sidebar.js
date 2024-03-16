import React, { useState } from "react";
import "../styles/sidebar.css"

const Sidebar = () => {
    return(
        <>
        <div className="navbar">
        <div className="top">
            <a href=""><img src="./images/logo.png" alt="" /></a>
            <a href=""><img src="./images/menu.png" alt="" /></a>
            <hr />
            <a href=""><img src="./images/library.png" alt="" /></a>
        </div>
        <div className="bottom">
            <a href=""><img src="./images/bell.png" alt="" /></a>
            <a href=""><img src="./images/profile.png" alt="" /></a>
        </div>
        </div>
        </>
    );
}

export default Sidebar;