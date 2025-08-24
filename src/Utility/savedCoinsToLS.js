
const storedCoins = () =>{
    const stored = localStorage.getItem('coin');
    if(stored){
        return JSON.parse(stored);
    }
    return 0;
}

const savedToLS = (value) =>{
    localStorage.setItem('coin', JSON.stringify(value))
}


const addToLS = (coins) =>{
    const prevCoins = storedCoins();
    const newCoins = Number(prevCoins) + Number(coins);
    savedToLS(newCoins)
}

export{storedCoins, addToLS, savedToLS}