import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { ListUsers } from "./pages/ListUsers"; 
import Auctions from "./pages/Auctions";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/auctions" element={<Auctions />} />
      </Routes>
    </Router>
  );
};

export default App;