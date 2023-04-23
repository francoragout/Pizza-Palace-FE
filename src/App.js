import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/home/Landing";
import Menu from "./pages/admin/Menu";
import Requests from "./pages/admin/Requests";
import Users from "./pages/admin/Users";
import Order from "./pages/home/Order";
import Navbar from "./components/Navbar/Navbar";
import Status from "./pages/home/Status";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />    
        <Route path="/order" element={<Order />} />     
        <Route path="/status" element={<Status/>} />     
        <Route path="/menu" element={<Menu />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
    
  );
}

export default App;
