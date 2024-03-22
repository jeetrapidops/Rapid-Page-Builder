import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js";
import Listingpage from "./pages/Listingpage.js";
import NoPage from "./pages/Nopage.js";
import Addpage from "./pages/Addpage.js";
import Home from "./pages/Home.js";
import ListingPublishedBlogs from "./pages/ListingPublishedBlogs.js";
import Blogpage from "./pages/Blogpage.js"
import Editpage from "./pages/Editpage.js";
// import Dummy from "./components/dummy.js";

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addpage" element={<Addpage/>}/>
      <Route path="/listingpage" element={<Listingpage/>}/>
      <Route path="/nopage" element={<NoPage/>}/>
      <Route path="/ListingPublishedBlogs" element={<ListingPublishedBlogs/>}/> 
      {/* <Route path="/dummy" element={<Dummy/>}/> */}
      <Route path="/blogs/:url" element={<Blogpage/>}/>
      <Route path="/editpage/:id" element={<Editpage />}/>
    </Routes>
 
  );
}

export default App;