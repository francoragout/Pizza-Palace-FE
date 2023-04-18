import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/home/Menu";
import Request from "./pages/home/Request";
import User from "./pages/home/User";
import Menus from "./pages/admin/menus";
import Requests from "./pages/admin/Requests";
import Users from "./pages/admin/Users";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/request" element={<Request />} />
        <Route path="/user" element={<User />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
    
  );
}

export default App;
