import React from 'react';
import Players from './../Players/Players';
import Player from '../Player/Player';


const Availabe = ({players, handleSelected}) => {
    return (
        <div className='grid grid-cols-3 gap-7'>
          {
            players.map(player => <Player player={player} handleSelected={handleSelected} key={player.id}></Player>)
          }
        </div>
    );
};

export default Availabe;