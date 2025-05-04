import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

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
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-blue-500 rounded-full">
            20% OFF
          </p>
        </div>
        {/* Room Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating rating={5} />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location icon" />
          <span>{room.hotel.address}</span>
        </div>
        {/* Room image */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room Main Image"
              className="w-full my-4 rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images?.length > 1 &&
              room.images.map((image, index) => (
                <div className="relative w-full">
                  <img
                    onClick={() => setMainImage(image)}
                    key={index}
                    src={image}
                    alt="Room Image"
                    className={`w-full h-full rounded-xl shadow-md object-cover cursor-pointer ${
                      mainImage === image &&
                      "outline-1 outline-blue-500 grayscale"
                    }`}
                  />
                  {mainImage === image && (
                    <div className="absolute inset-0 bg-blue-600/50 rounded-xl" />
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* Room Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playFair">
              Experience Luxury Line Never Before.
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((amnety, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[amnety]}
                    alt="Amenities"
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{amnety}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Room Price */}
          <p className="text-2xl font-medium">${room.pricePerNight}/ Night</p>
        </div>
        {/* Check In Check Out form */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 md:px-10 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-2 text-gray-500">
            <label htmlFor="checkInDate" className="font-medium">
              Check In
            </label>
            <input
              type="date"
              id="checkInDate"
              placeholder="Check In"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="w-px h-18 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col flex-wrap md:flex-row items-start mt-5 md:mt-0 md:items-center gap-4 md:gap-2 text-gray-500">
            <label htmlFor="checkOutDate" className="font-medium">
              Check Out
            </label>
            <input
              type="date"
              id="checkOutDate"
              placeholder="Check Out"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="w-px h-18 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col mt-5 md:mt-0">
            <label htmlFor="gustes" className="font-medium">
              Gustes
            </label>
            <input
              type="number"
              id="gustes"
              placeholder="0"
              min={1}
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>
        {/* Common Specifications */}
        <div className="mt-20 space-y-4">
          {roomCommonData?.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6" />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl border-y border-gray-300 my-10 py-10 text-gray-600">
          <p>
            Guests will be allocated on the ground floor according to
            Availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allowcated ground floor according tot he
            availability. You get the comfortable two bedroom apartment that has
            a true city feeling.
          </p>
        </div>
        {/* Hosted by */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="w-14 h-14 md:w-18 md:h-18 rounded-full"
            />
            <div>
              <p className="text-lg md:text-xl">
                Hosted By:{" "}
                <span className="text-blue-600">{room.hotel.name}</span>
              </p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 md:ml-48 rounded text-white bg-primary hover:bg-primary/90 transition-all cursor-pointer">
            Contact Now
          </button>
        </div>
      </div>
    )
  );
}

export default RoomDetails;
