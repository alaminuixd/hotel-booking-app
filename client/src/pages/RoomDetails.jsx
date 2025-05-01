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
    <div className="flex flex-col-reverse lg:flex-row pt-28">
      <div>
        <h1>Room Details</h1>
        <img src={mainImage} alt="" />
      </div>
    </div>
  );
}

export default RoomDetails;
