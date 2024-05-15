import "./App.css";
import React, { useEffect, useState } from "react";
import { db } from "./Firebase-config";
import { getDoc, doc } from "firebase/firestore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages//StudentRegister";
import TeacherTraining from "./pages/TeacherTraining";
import Dashboard from "./admin/dashboard";
import Profile from "./pages/Profile";
import ErrorPage from "./ErrorPage";
import { auth } from "./Firebase-config";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/StudentRegister"
            element={user ? <Navigate to="/Profile" /> : <Register />}
          />
          <Route path="/StudentRegister" element={<Register />} />
          <Route path="/TeacherTraining" element={<TeacherTraining />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Login" element={<Login />} />

          <Route path="/Profile" element={<Profile />} />
          <Route
            path="/Login"
            element={user ? <Navigate to="/Profile" /> : <Login />}
          />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard"
            element={user ? <Navigate to="/dashboard" /> : <Profile />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
