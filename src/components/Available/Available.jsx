import React from 'react';
import Player from '../Player/Player';

const Available = ({players,handleSelect}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-8'>
                {
                    players.map(player => <Player player={player} handleSelect={handleSelect}></Player>)
                }
            </div>



        </div>
    );
};

export default Available;