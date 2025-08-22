import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((player) => setPlayers(player));
  }, []);

  return (
    <div>
      <h1>Hello palyers: {players.length}</h1>
      <div>
        {
            players.map(player => <Player player={player} key={player.div}></Player>)
        }
        </div>
    </div>
  );
};

export default Players;
