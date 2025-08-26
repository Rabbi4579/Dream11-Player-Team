import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Selected = ({ selectedPlayers, hdndleDeletePlayer }) => {

  

  return (
    <div>
      {selectedPlayers.map((player) => (
        <div className="flex justify-between items-center border border-[#131313]/10 p-5 rounded-2xl mb-5">
          <div className="flex items-center">
            <div className="mr-[20px]">
              <img
                className="w-[80px] h-[80px] rounded-2xl"
                src={player.playerImg}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-[24px] font-semibold text-[#131313] mb-[5px]">{player.name}</h2>
              <p className="text-[16px] font-normal text-[#131313]/60">{player.style2}</p>
            </div>
          </div>
          <div>
             <button onClick={() => hdndleDeletePlayer(player)}><AiOutlineDelete  className="text-[35px] text-red-600"/></button>

          </div>
        </div>
      ))}
      <button  className="text-[16px] font-bold rounded-md ring ring-[#131313]/40 ring-offset-4 mb-[200px] px-6 py-2 text-center bg-[#E7FE29]">Add More Player</button>
    </div>
  );
};

export default Selected;
