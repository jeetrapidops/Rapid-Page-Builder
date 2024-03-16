import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js";
import Listingpage from "./pages/Listingpage.js";
import NoPage from "./pages/Nopage.js";
import Addpage from "./pages/Addpage.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/listingpage" element={<Listingpage/>}/>
      <Route path="/nopage" element={<NoPage/>}/>
      <Route path="/addpage" element={<Addpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
