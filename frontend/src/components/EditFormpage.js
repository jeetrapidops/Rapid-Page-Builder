import React, { useState, useEffect } from "react";
import axios from "axios";

const initialFormData = {
  title: "",
  subtitle: "",
  body: "",
  author_name: "",
  publish_datetime: ""
};

export const EditFormpage = () => {
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); 

  const pathParts = window.location.pathname.split('/');
  const lastPart = pathParts[pathParts.length - 1];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/page/get/${lastPart}`,
        {
          headers: {
            Authorization: localStorage.getItem("user"),
          },
        }
      );
      console.log(response.data.data); 
      setFormData(response.data.data);
      setTitle(response.data.data.title)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/page/update/${lastPart}`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("user")
          }
        }
      );
      alert("page update sucessfully");
      console.log("Page update:", response.data);
    
      setError(null);
    } catch (error) {
      alert(error.response.data)
      console.error("Error creating page:", error);
      setError("Failed to create page. Please try again.");
    }
  };

  return (
    <>
    <div>
    
      <h2>EDIT PAGE </h2>
      <h3>title : {title}</h3>
      <h3>status : {formData.status}</h3>
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <label htmlFor="title">Title:</label><br />
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br /><br />

        <label htmlFor="subtitle">Subtitle:</label><br />
        <input type="text" id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} /><br /><br />

        <label htmlFor="body">Body:</label><br />
        <textarea id="body" name="body" rows="6" cols="50" value={formData.body} onChange={handleChange} required></textarea><br /><br />


        <label htmlFor="author_name">Author Name:</label><br />
        <input type="text" id="author_name" name="author_name" value={formData.author_name} onChange={handleChange} required /><br /><br />

        {error && <div style={{ color: 'red' }}>{error}</div>}
        
        <input type="submit" value="Update" />
         {/* <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={(formData.publish_datetime.toString())}
            onChange={handleChange} defaultValue={(formData.publish_datetime)}
          /> */}
          {/* {typeof formData.publish_datetime} */}
        {/* <input type="button" value="Publish" />  */}

      </form>
      </div>
    </>
  );
};


