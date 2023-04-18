import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/home/Landing";
import Menu from "./pages/admin/Menu";
import Requests from "./pages/admin/Requests";
import Users from "./pages/admin/Users";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />     
        <Route path="/menu" element={<Menu />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
    
  );
}

export default App;
