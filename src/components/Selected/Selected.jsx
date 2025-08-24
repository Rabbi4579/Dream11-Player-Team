import React from "react";
import { MdDelete } from "react-icons/md";

const Selected = ({ selectedPlayers, players }) => {
  return (
    <div>
      <h2 className="text-[28px] font-bold">{`Selected Player(${selectedPlayers.length} / ${players.length})`}</h2>
      <div>
        {selectedPlayers.map((selectedPlayer) => (
          <div className="mb-5">
            <div className="flex justify-between items-center shadow-2xl px-5 py-5 rounded-md mt-11">
              <div className="flex">
                <div>
                  <img
                    className="w-[80px] rounded-lg"
                    src={selectedPlayer.playerImg}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p>{selectedPlayer.name}</p>
                  <p>{selectedPlayer.style}</p>
                </div>
              </div>
              <div>

            <MdDelete className="text-3xl text-red-600 " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selected;
