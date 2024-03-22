import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const { fullname, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
        fullname,
        email,
        password
      });

      alert(response.data.message); 

      // Navigate to login page after successful registration
      navigate('/login');
    } catch (error) {
      alert(error.response.data.message); 
    }
  };
  return (
    <>
      <div class="container justify-content-center align-items-center d-flex flex-column">
        <div class="d-flex mt-4 mb-1">
          <img src="./images/logo.png" style={{ width: "3.75em" }} />
          <h1>Rapid Page Builder</h1>
        </div>

        <form class="border border-secondary-subtle p-4" style={{ width: "80%" }} onSubmit={handleSubmit}>
          <h2 class="mb-4">Register</h2>

          <div class="mb-3">
            <label for="fullname" class="form-label">
              FullName *
            </label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="Enter your fullName"
              name="fullname"
              onChange={handleChange}
              required
            />
          </div>

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

          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="newsletter"
            />
            <label class="form-check-label" for="newsletter">
              Subscribe to our newsletter
            </label>
          </div>

          <p>
            Your personal data will be used to support your experience
            throughout the website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy</a>
          </p>
          <div>
            <button type="submit" class="btn" id="register"  style={{background: "#4F46E5", color:"white"}}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
