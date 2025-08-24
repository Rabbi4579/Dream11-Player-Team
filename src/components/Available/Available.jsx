import React from 'react';
import Player from '../Player/Player';

const Available = ({players,handleSelect}) => {
    return (
        <div>
            <h2 className='text-4xl font-bold'>Available Here{players.length}</h2>
            <div className='grid grid-cols-3 gap-8'>
                {
                    players.map(player => <Player player={player} handleSelect={handleSelect}></Player>)
                }
            </div>



        </div>
    );
};

export default Available;