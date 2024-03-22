import React, { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import axios from "axios";
import "../styles/pages.css";
import { NavLink, useNavigate } from "react-router-dom";

const Pages = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/page/getAllPages",
        {
          headers: {
            Authorization: localStorage.getItem("user"),
          },
        }
      );
      setData(response.data.data); 
      setFilteredData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue);
    filterData(searchValue, selectedStatus);
  };

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setSelectedStatus(status);
    filterData(searchText, status);
  };

  const filterData = (searchValue, status) => {
    let filtered = [...data]; 
    if (status !== "all" && status !== "All") {
      filtered = filtered.filter((item) => item.status === status.toLowerCase());
    } else {
      filtered = filtered.filter((item) => true)
    }
    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  const deleteRow = async(event) =>{
    const tr = event.target.parentElement.parentElement;
    console.log(tr.id);
    const id = tr.id;
    try {
            await axios.delete(`http://localhost:5000/api/v1/page/delete/${id}`, {
              headers: {
                  Authorization: localStorage.getItem("user"),
                },
            });
            fetchData();
            alert("delete entry");
        } catch (error) {
            console.error("Error saving post:", error);
            alert("An error occurred while saving the post.");
        }
  }
  const editRow = async (event) => {
    const tr = event.target.parentElement.parentElement;
    console.log(tr.id);
    const id = tr.id;
    navigate(`/editpage/${id}`);
  }
  const navigate = useNavigate();

  return (
    <>
      <div className="pages">
        <div className="topbar">
          <div className="leftpages">
            <h4>Pages</h4>
            <p>Create and publish pages.</p>
          </div>
          <div className="rightpages">
            <button
              type="button"
              onClick={() => {
                navigate("/addpage");
              }}
            >
              + Add Page
            </button>
          </div>
        </div>
        <hr />
        <div className="middle">
          <div className="search-div">
            <input type="text" placeholder="Search" id="search" value={searchText}
              onChange={handleSearch} />
            <snap class="ms-2">{filteredData.length } records</snap>
          </div>
          <div className="filters">
          <span>Status</span>
            <select
              className="dropdown"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="All">All</option>
              <option value="Draft">Draft</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Published">Published</option>
            </select>
          </div>
        </div>
        <div className="last">
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Created At</th>
            <th>Modified At</th>
            <th>Status</th>
            <th colSpan={2}>button</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr id={item._id}>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{new Date(item.createdAt).toString()}</td>
              <td>{new Date(item.updatedAt).toString()}</td>
              <td>{item.status}</td>
              <td><button onClick={deleteRow}>Delete</button></td>
              <td><button onClick={editRow}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </>
  );
};

export default Pages;
