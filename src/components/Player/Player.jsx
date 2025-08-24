import React from "react";
import { FaRegUser } from "react-icons/fa";

const Player = ({ player,handleSelected }) => {
  console.log(player);
  const { name, country, countryFlag, playerImg, price, rating, style } =
    player;
  return (
    <div>
      <div>
        <img className="w-[430px] h-[240px]" src={playerImg} alt="" />
      </div>
      <div className="flex items-center mt-5 space-x-2">
        <FaRegUser />
        <h2>{name}</h2>
      </div>
      <div className="flex justify-between items-center border-b boreer-[#131313]/5">
        <div className="flex items-center">
          <img className="size-9 mr-2" src={countryFlag} alt="" />
          <p>{country}</p>
        </div>
        <p>{style}</p>
      </div>
      <div className="mt-4">Ratings: {rating}</div>
      <div className="flex justify-between items-center">
        <p>{style}</p>
        <p>{style}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Price: {price}</p>
        <button onClick={() =>handleSelected(player)} className="px-4 bg-amber-400 py-2 rounded">Choose Player</button>
      </div>
    </div>
  );
};

export default Player;
