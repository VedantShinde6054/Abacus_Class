import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages//StudentRegister";
import TeacherTraining from "./pages/TeacherTraining";
import Dashboard from "./admin/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/StudentRegister" element={<Register />} />
          <Route path="/TeacherTraining" element={<TeacherTraining />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
