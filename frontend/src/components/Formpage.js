import React, { useState } from "react";
import axios from "axios";

const initialFormData = {
  title: "",
  subtitle: "",
  body: "",
  url: "",
  author_name: ""
};

export const FormPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [publishDate, setPublishDate] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/page/createpage",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("user")
          }
        }
      );
      alert("page created sucessfully");
      console.log("Page created:", response.data);
      
      // Reset form data after successful submission
      setFormData(response.data);
      // setFormData(initialFormData);
      setError(null);
    } catch (error) {
      alert(error.response.data)
      console.error("Error creating page:", error);
      setError("Failed to create page. Please try again.");
    }
  };

  const handlePublish = async (e) => {
    console.log("Publish Date:", publishDate);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/page/updatePublish/${formData._id}`,
        {"publish_datetime":`${publishDate}`},
        {
          headers: {
            Authorization: localStorage.getItem("user")
          }
        }
      );
      alert("page schudled sucessfully");
      console.log("Page is:", response.data);
      
      // Reset form data after successful submission
      // setFormData(response.data);
      setFormData(initialFormData);
      setPublishDate("")
      setError(null);
    } catch (error) {
      console.error("Error public date change:", error);
      setError("Failed to public date change Please try again.");
    }
  }

  return (
    <>
    <div>
      <h2>ADD PAGE</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Title:</label><br />
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br /><br />

        <label htmlFor="subtitle">Subtitle:</label><br />
        <input type="text" id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} /><br /><br />

        <label htmlFor="body">Body:</label><br />
        <textarea id="body" name="body" rows="6" cols="50" value={formData.body} onChange={handleChange} required></textarea><br /><br />

        <label htmlFor="url">URL:</label><br />
        <input type="text" id="url" name="url" value={formData.url} onChange={handleChange} required /><br /><br />

        <label htmlFor="author_name">Author Name:</label><br />
        <input type="text" id="author_name" name="author_name" value={formData.author_name} onChange={handleChange} required /><br /><br />

        {error && <div style={{ color: 'red' }}>{error}</div>}
        
        <input type="submit" value="Submit" />
        <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
        <input type="button" value="Publish" onClick={handlePublish} />

      </form>
      </div>
    </>
  );
};


