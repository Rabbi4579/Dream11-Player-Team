import React from 'react';

const Player = ({player}) => {
    console.log(player)
    return (
        <div>
            <img className='w-2xl' src={player.playerImg} alt="" />
        </div>
    );
};

export default Player;