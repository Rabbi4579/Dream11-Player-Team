import React from "react";
import { FaUser } from "react-icons/fa";

const Player = ({ player, handleSelect }) => {
  const { name, country, countryFlag, playerImg, price, rating, style } =
    player;
  return (
    <div className="shadow p-4 rounded-md">
      
        <div className="border-b border-[#131313]/10">
          <img className="w-[440px] h-[240px] " src={playerImg} alt="" />
          <h2 className="mt-8 flex items-center">
            <FaUser className="w-[28px] p-0 m-0" />
            {name}
          </h2>
          <div className="flex justify-between mb-3">
            <div className="flex items-center gap-2">
              <img className="w-[30px]" src={countryFlag} alt="" />
              <p>{country}</p>
            </div>
            <div>
              <p className="bg-[#131313]/5 px-6 py-2 rounded-md">{style}</p>
            </div>
          </div>
        </div>
        <div className="mt-3">
            <p>Rating: {rating}</p>
        </div>
        <div className="flex justify-between items-center">
            <div>{style}</div>
            <div>{style}</div>
        </div>
        <div className="flex justify-between items-center">
            <div>Price: ${price}</div>
           <button onClick={() => handleSelect(player)} className="border border-[#131313]/10 px-4 py-2 rounded-md">Choose Player</button>
        </div>
      
    </div>
  );
};

export default Player;
