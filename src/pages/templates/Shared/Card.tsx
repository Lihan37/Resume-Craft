import React from "react";
import { Link } from "react-router-dom";

interface ICard {
  imgUrl: string;
  link?: string;
  name?: string;
}

const Card: React.FC<ICard> = ({ imgUrl, link = "/", name }) => {
  return (
    <Link to={link}>
      <div className=" bg-blue-50 rounded-sm p-5 cursor-pointer ">
        <h1 className=" font-normal font-mono text-2xl text-c-dark capitalize pb-5">
          {name}
        </h1>
        <img src={imgUrl} alt={name} className="h-96 w-full" />
      </div>
    </Link>
  );
};

export default Card;
