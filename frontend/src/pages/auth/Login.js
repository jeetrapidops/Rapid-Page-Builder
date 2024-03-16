import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = () => {

  const [auth ,setAuth] = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Create navigate function for navigation

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        email,
        password
      });
      if(response.data){
        const access_token = response.data.access_token 
        console.log(access_token)
        localStorage.setItem("user" , access_token)// Handle success response
        setAuth({
          access_token : access_token
        })
      }
      console.log(auth);
      alert("login Successful")
    
      // Navigate to login page after successful registration
      navigate('/');
    } catch (error) {
      alert(error.response.data.message); // Handle error response
    }
  };
  return (
    <>
      <div
        class="container justify-content-center align-items-center d-flex flex-column"
        style={{ height: "80vh" }}
      >
        <div class="d-flex mt-3 mb-1">
          <img src="./images/logo.png" style={{ width: "3.75em" }} />
          <h1>Rapid Page Builder</h1>
        </div>

        <form
          class="border border-secondary-subtle p-4"
          style={{ width: "80%" }} onSubmit={handleSubmit}
        >
          <h2 class="mb-4">Login</h2>

          <div class="mb-3">
            <label for="email" class="form-label">
              Email address *
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email address"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">
              Password *
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button type="submit" class="btn " id="login" style={{background: "#4F46E5", color:"white"}}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
