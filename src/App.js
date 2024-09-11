import "./index.css";
import Login from "./pages/auth/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Collections from "./pages/dashboard/Collections";
import Notifications from "./pages/dashboard/Notifications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
