import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Supplements from "./components/Supplements";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/supplements" element={<Supplements />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
