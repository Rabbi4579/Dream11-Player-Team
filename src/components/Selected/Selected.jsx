import React from 'react';

const Selected = ({selectedPlayers}) => {
    console.log(selectedPlayers.length)
    return (
        <div>
            {
                selectedPlayers.map(player => 
                <div>
                    <div>
                        <img className='w-[80px] h-[80px]' src={player.playerImg} alt="" />
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default Selected;