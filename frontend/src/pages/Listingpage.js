import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Pages from "../components/Pages";

const Listingpage = () => {
    return(
        <>
        <div className="listingpage" style={{display:"flex"}}>
        <Sidebar/>
        <Pages/>
        </div>
        </>
    );
};

export default Listingpage;