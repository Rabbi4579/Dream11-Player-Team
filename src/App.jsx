import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import { addCoin, stored } from "./Javascript/coinlocalStorage";

function App() {

  const [coins, setCoins] = useState(0);

  const handleCoin = () =>{
    const coin = 600000;
    const newCoin = coins + coin;
    setCoins(newCoin)
    addCoin(newCoin)
  }

  useEffect(() =>{
    const storedCoin = stored();
    setCoins(storedCoin)
  },[])

  return (
    <>
      <div className="max-w-[1320px] m-auto mt-8">
        <Header coin={coins}></Header>
        <Banner handleCoin={handleCoin}></Banner>
        <Players></Players>
      </div>
    </>
  );
}

export default App;
