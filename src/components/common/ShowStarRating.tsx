import React from "react";
import { AiFillStar } from "react-icons/ai";
import createArrayUpToNumber from "../../utils/createArrayUpToNumber";
import { Gap } from "../../types";

export enum StarSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  gap?: Gap;
  size?: StarSize;
  activeColor?: string;
  deActiveColor?: string;
}

const ShowStarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxRating = 5,
  gap = Gap["1D"],
  size = StarSize.LG,
  activeColor = "#fb923c",
  deActiveColor = "#b8becc",
}) => {
  return (
    <div className={`flex justify-start items-center ${gap}`}>
      {createArrayUpToNumber(rating).map((item) => (
        <AiFillStar
          style={{ color: activeColor }}
          key={item}
          className={`
          ${size === StarSize.SM && "text-lg"} 
          ${size === StarSize.MD && "text-2xl"}
          ${size === StarSize.LG && "text-4xl"}
          `}
        />
      ))}
      {createArrayUpToNumber(maxRating - rating).map((item) => (
        <AiFillStar
          style={{ color: deActiveColor }}
          key={item}
          className={`
          ${size === StarSize.SM && "text-lg"} 
          ${size === StarSize.MD && "text-2xl"}
          ${size === StarSize.LG && "text-4xl"}
          `}
        />
      ))}
    </div>
  );
};

export default ShowStarRating;
