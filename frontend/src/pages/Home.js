import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <NavLink to="/register">SignUp</NavLink>
   <br />
   <NavLink to="/login">Login</NavLink>
   <br />
   
   </>
  )
}

export default Home