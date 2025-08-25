const savedPlayers = () =>{
    const saved = localStorage.getItem('player');
    if(saved){
        return JSON.parse(saved);
    }
    return [];
}

const savedPlayersToLs = (updateValue) =>{
    const stringified = JSON.stringify(updateValue)
    localStorage.setItem('player', stringified);

}


const addedPlayers = (player) =>{
    const prevPlayer = savedPlayers();
    const existPlayer = prevPlayer.find(idx => idx.id === player.id)
    if(!existPlayer){
        prevPlayer.push(player)
    savedPlayersToLs(prevPlayer);
    }
        
   
}

export {addedPlayers, savedPlayers}