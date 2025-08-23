
const stored = () =>{
    const saved = localStorage.getItem('coin')
    if(saved){
        return JSON.parse(saved)
    }
    return 0;
}


const addCoin = (coin) =>{
    const storedCoin = stored();
    const newCoin = storedCoin + coin;
    localStorage.setItem('coin', JSON.stringify(newCoin))
}

export{addCoin, stored}