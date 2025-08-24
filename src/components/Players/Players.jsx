import React, { useEffect, useState } from "react";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const Players = () => {
  const [active, setActive] = useState("A");
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleSelect = (player) => {
    // console.log('Added player', player)
    if (!selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  console.log(selectedPlayers)

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div>
          <div>Available Players</div>
        </div>
        <div className="flex items-center border border-[#131313]/10 rounded-md">
          <button
            onClick={() => setActive("A")}
            className={`px-4 py-2 ${
              active === "A" ? "bg-[#E7FE29] rounded-md" : "bg-white text-black"
            }`}
          >
            Availabe
          </button>
          <button 
            onClick={() => setActive("B")}
            className={`px-4 py-2 ${
              active === "B" ? "bg-[#E7FE29]" : "bg-white text-black"
            }`}
          >
            {selectedPlayers.length} Selected
          </button>
        </div>
      </div>
      {/* rendering component */}

      <div>
        {active === "A" && <Available players={players} handleSelect={handleSelect}></Available>}
        {active === "B" && <Selected selectedPlayers={selectedPlayers} players={players}></Selected>}
      </div>
    </div>
  );
};

export default Players;
