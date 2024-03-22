import React from "react";
import Sidebar from "../components/Sidebar";
import Blogs from "../components/Blogs";

const ListingPublishedBlogs = () => {
  return (
    <>
      <div className="blogsg" style={{ display: "flex" }}>
        <Sidebar />
        <Blogs />
      </div>
    </>
  );
};

export default ListingPublishedBlogs;
