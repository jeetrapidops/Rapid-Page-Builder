import {React, useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Blogpage = () => {
    const params = useParams();
    const {url} = params;

    const [data, setData] = useState({title : "",subtitle: "", body: "",url : "", author_name:"",publish_datetime:"",createdAt: "" });

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/page/getBlog/${url}`,
            {
              headers: {
                Authorization: localStorage.getItem("user"),
              },
            }
          );
          setData({
            title : response.data.data.title,
            subtitle : response.data.data.subtitle,
            body : response.data.data.body,
            url : response.data.data.url,
            author_name : response.data.data.author_name,
            publish_datetime : response.data.data.publish_datetime,
            createdAt : response.data.data.createdAt,
          }); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
  return (  
    <div>
        <h5>Title : {data.title}</h5>
        <h5>SubTitle : {data.subtitle}</h5>
        <h5>Body : {data.body}</h5>
        <h5>URL : {data.url}</h5>
        <h5>Author Name : {data.author_name}</h5>
        <h5>Publish Datetime : {data.publish_datetime}</h5>
        <h5>createdAt : {data.createdAt}</h5>
    </div>
  )
}

export default Blogpage;
