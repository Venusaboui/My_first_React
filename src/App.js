import "./index.css";
import Login from "./pages/auth/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Collections from "./pages/dashboard/Collections";
import Notifications from "./pages/dashboard/Notifications";
import Profile from "./pages/dashboard/Profile";
import { Uploads } from "./pages/dashboard/Uploads";
import { Liked } from "./pages/dashboard/Liked";
import Coursepage from "./components/coursepage";
import { Report } from "./components/Report";
import Breadcrumb from "./components/Breadcrumb";
import { Reportcontent } from "./components/Reportcontent";

function App() {
  return (
    <Router>
       <Breadcrumb/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home"  element={<Home />} />  
        <Route path="/collections" element={<Collections />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/course/:id" element={<Coursepage/>} />
        <Route path="/reports/:id" element={<Report/>}/>
        <Route path="/home/reports" element={<Home/>}/>
        <Route path="/Reportcontent" element={<Reportcontent/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;
