import React, { useState } from "react";
import Availabe from "../Available/Availabe";
import Selected from "../Selected/Selected";

const Players = ({ players,handleSelected, selectedPlayers }) => {
  const [active, setActive] = useState("A");

  console.log(selectedPlayers)





  return (
    <div>
      <div className="flex justify-between items-center mb-7 ">
        <div>
          {active === "A" && <p className="text-[28px] font-bold">Available Players: {players.length}</p>}
          {active === "B" && <p className="text-[28px] font-bold">Selected ({selectedPlayers.length} / {players.length})</p>}
        </div>
        <div className="border border-[#131313]/10 rounded-md">
          <button
            onClick={() => setActive("A")}
            className={` text-[16px] font-bold px-8 py-2 rounded-md ${
              active === "A" ? "bg-[#E7FE29] " : "bg-white text-black"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActive("B")}
            className={`text-[16px] font-bold px-8 py-2 rounded-md ${
              active === "B" ? "bg-[#E7FE29]" : "bg-white text-black"
            }`}
          >
            Selected
          </button>
        </div>
      </div>
      {active === "A" && <Availabe players ={players} handleSelected={handleSelected}></Availabe>}
      {active === "B" && <Selected selectedPlayers={selectedPlayers}></Selected>}
    </div>
  );
};

export default Players;
