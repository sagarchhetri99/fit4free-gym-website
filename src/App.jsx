import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WorkoutDetail from "./pages/WorkoutDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout/:id" element={<WorkoutDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
