import React from "react";
import { FaUser } from "react-icons/fa6";

const Player = ({ player,handleSelected }) => {
  const { name, country, countryFlag, playerImg, price, rating, style,style2 } =
    player;
  return (
    < div className="border border-[#131313]/10 p-5 rounded-md shadow">
      <div>
        <img className="w-[430px] h-[240px] rounded-md" src={playerImg} alt="" />
      </div>
      <div className="flex items-center mt-5 space-x-2">
        <FaUser className="w-[25px] h-[25px] text-[#131313]"/>
        <h2 className="text-[20px] font-semibold">{name}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="size-7 mr-2" src={countryFlag} alt="" />
          <p className="text-[16px] font-normal text-[#131313]/60">{country}</p>
        </div>
        <p className="text-[14px] text-[#131313] px-6 rounded-md py-2 bg-[#131313]/5">{style}</p>
      </div>
      <div className="border-b border-[#131313]/10 mb-3 mt-3"></div>
      <div className="mt-4 text-[16px] font-bold">Ratings: {rating}</div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[16px] font-semibold ">{style2}</p>
        <p className="text-[16px] font-normal text-[#131313]/70">{style2}</p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-[16px] font-semibold text-[#131313]">Price: {price}</p>
        <button onClick={() =>handleSelected(player)} className="px-4  py-2 border border-[#131313]/10 rounded-md  hover:bg-[#E7FE29] transition">Choose Player</button>
      </div>
    </div>
  );
};

export default Player;
