import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import Auctions from "./pages/Auctions";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AuctionLots from "./pages/AuctionLots";
import Artworks from "./pages/Artworks";
import UserContext from "./UserContext";

function App (){
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Auctions" element={<Auctions />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Register" element={<Register />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Auction/:auctionId" element={<AuctionLots />} />
          <Route path="Artworks" element={<Artworks />} />
        </Routes> 
      </Router>
    </UserContext.Provider>
  )
}



export default App;