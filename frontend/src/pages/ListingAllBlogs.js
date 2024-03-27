import {React, useState, useEffect} from 'react'
import axios from "axios";
import "../styles/blogs.css"
import { useNavigate } from 'react-router-dom'

const ListingAllBlogs = () => {
    const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/page/getAllBlogs"
      );
      setData(response.data.blogs); 
    //   console.log(response.data.blogs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
        <h2 style={{position:"sticky", top:"0px", background:"grey"}}>all blogs</h2>
        <div className='blogs-main'>
        
          {data.map((e) => (
            <div className="blogs">
            <h4>Title : {e.title}</h4>
            <h6>SubTitle : {e.subtitle}</h6>
            <p>Body: {e.body.slice(0,10)}</p>
            <button onClick={() => navigate(`/blogs/${e.url}`)}>Goto Blog</button>
            </div>
          ))}
        </div>
    </>
  )
}

export default ListingAllBlogs
