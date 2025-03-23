import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logo from "./components/Logo.jsx";
import Navbar from "./components/Navbar.jsx";
import Advertisement from "./components/Advertisement.jsx";
import FeaturedNews from "./components/FeaturedNews.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NewsCard from "./components/NewsCard.jsx";
import Footer from "./components/Footer.jsx";

// Import login system pages
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ForgotPassword from "./components/Forgotpassword.jsx";

import "./App.css";

const HomePage = () => {
  return (
    <div className="app">
      <Logo />
      <Navbar />
      <div className="main-content">
        <div className="add">
          <Advertisement />
          <FeaturedNews />
        </div>
        <Sidebar />
      </div>
      <div className="news-grid">
        {[...Array(4)].map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
