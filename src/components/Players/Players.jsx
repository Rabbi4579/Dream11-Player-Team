import React, { useState } from "react";
import Availabe from "../Available/Availabe";
import Selected from "../Selected/Selected";

const Players = ({ players,handleSelected, selectedPlayers }) => {
  const [active, setActive] = useState("A");






  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          {active === "A" && <p>Available Players: {players.length}</p>}
          {active === "B" && <p>Selected (0 / {players.length})</p>}
        </div>
        <div>
          <button
            onClick={() => setActive("A")}
            className={`px-4  rounded ${
              active === "A" ? "bg-amber-400" : "bg-white text-black"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActive("B")}
            className={`px-4 rounded ${
              active === "B" ? "bg-amber-400" : "bg-white text-black"
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
