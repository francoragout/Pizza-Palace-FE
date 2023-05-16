import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/home/Landing";
import Menus from "./pages/admin/Menus";
import Requests from "./pages/admin/Requests";
import Users from "./pages/admin/Users";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Orders from "./pages/home/Orders";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />   
        <Route path="/home" element={<Home />} />     
        <Route path="/orders" element={<Orders/>} />     
        <Route path="/menus" element={<Menus />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
