import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Selected = ({ selectedPlayers }) => {
  console.log(selectedPlayers.length);
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
             <AiOutlineDelete  className="text-[35px] text-red-600"/>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Selected;
