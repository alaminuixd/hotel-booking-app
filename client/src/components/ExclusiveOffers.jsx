import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align={"left"}
          title={"Exclusive Offers"}
          subTitle={
            "Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          }
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-8 md:pt-10 px-6 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* Overlay div */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10">
              <p className="px-3 py-1 inline-block text-xs mb-5 bg-white text-gray-800 font-medium rounded-full">
                {item.priceOff}% OFF
              </p>
              <div>
                <p className="text-3xl font-medium font-playfair">
                  {item.title}
                </p>
                <p>{item.description}</p>
                <p className="text-xs text-white/70 mt-3">
                  Expires {item.expiryDate}
                </p>
              </div>
              <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
                View Offers
                <img
                  className="invert group-hover:translate-x-1 transition-all"
                  src={assets.arrowIcon}
                  alt="arrow icon"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExclusiveOffers;
