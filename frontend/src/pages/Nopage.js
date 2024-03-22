import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NoPageFound from "../components/NoPageFound";

const NoPage = () => {
  return (
    <>
      <div className="nopage" style={{ display: "flex" }}>
        <Sidebar />
        <NoPageFound />
      </div>
    </>
  );
};

export default NoPage;
