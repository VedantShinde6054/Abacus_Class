import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
