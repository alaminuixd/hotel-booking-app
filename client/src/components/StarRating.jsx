import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default StarRating;

/* 
First it will make an array with 5 elements, then fill each element by "" and then it will map through the array.
there are 5 indexes starting from 0 to 4.
it will return 5 images of star icon.
index 0 rating 3 star filled
index 1 rating 3 star filled
index 2 rating 3 star filled 
index 3 rating 3 star outlined as rating 3 is not greater than index 4.
index 4 rating 3 star outlined as rating 3 is not greater than index 4.
*/
