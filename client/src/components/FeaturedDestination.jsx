import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-100 py-20">
      <Title
        title={"Featured Destination"}
        subTitle={
          "Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
        }
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="cursor-pointer text-1xl bg-white text-black px-6 py-3 rounded-sm mt-8 hover:bg-blue-50 transition-all duration-300 border-1 border-gray-100 shadow-[0px_2px_4px_rgba(0,0,0,0.2)]"
        >
          View All Destinations
        </button>
      </div>
    </div>
  );
};

export default FeaturedDestination;
