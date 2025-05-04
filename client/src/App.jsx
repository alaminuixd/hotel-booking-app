import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";
import NotFound from "./pages/NotFound";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotel-owner/Layout";

const App = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const isOwner = useLocation().pathname.includes("owner"); // we can also use followings.
  // const isOwner = useLocation().pathname === "/owner";
  return (
    <div>
      {!isOwner && <Navbar />}
      {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route
            path="/my-bookings"
            element={user ? <MyBooking /> : <NotFound />}
          />
          <Route path="/owner" element={<Layout />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
