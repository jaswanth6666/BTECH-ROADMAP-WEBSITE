import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoadmapList from './components/RoadmapList';
import RoadmapDetail from './components/RoadmapDetail';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPassword';
import './App.css';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import DomainsPage from './components/DomainsPage';
import DomainPage from './components/DomainPage';
import Footer from "./components/Footer";
import "./css/Dashboard.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId/domains" element={<DomainsPage />} />
        <Route path="/domains/:domainId/details" element={<DomainPage />} />
        <Route path="/roadmap/:specialization" element={<RoadmapDetail />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;