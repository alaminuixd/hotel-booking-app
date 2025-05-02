import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";

function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom((prev) => room);
    room && setMainImage((prev) => room.images[0]);
  }, []);
  console.log(room);
  console.log(mainImage);
  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div>
          <h1>
            {room.hotel.name} <span>({room.roomType})</span>
          </h1>
          <p>20% OFF</p>
          <img src={mainImage} alt="" />
        </div>
      </div>
    )
  );
}

export default RoomDetails;
