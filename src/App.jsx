import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import { addToLS, savedToLS, storedCoins } from "./Utility/savedCoinsToLS";
import { ToastContainer, toast } from "react-toastify";
import { addedPlayers, savedPlayers } from "./Utility/storedSelectedPlayers";


function App() {
  const [players, setPlayers] = useState([]);
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  useEffect(() => {
    const savedCoins = storedCoins();
    setCoins(savedCoins);
  }, []);

  const handleCoins = () => {
    const defaultCoins = 100000;
    const newCoins = coins + defaultCoins;
    setCoins(newCoins);
    addToLS(defaultCoins);
  };

  const handleSelected = (player) => {
    console.log(player);
    if (!selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
    
    const savedPlaeyrsLS = savedPlayers();
    const existingPlayer = savedPlaeyrsLS.find((p) => p.id === player.id);
    
    if (!existingPlayer) {
      const prevCoin = storedCoins();
      if (prevCoin >= player.price) {
        const remaining = prevCoin - player.price;
        setCoins(remaining);
        savedToLS(remaining);
      } else {
        toast("You have not enough money!");
      }
      addedPlayers(player);
    }else{
        toast.warning(`${player.name} is already Selected!!`, {position:"top-center"})
    }
  };

  useEffect(() =>{
    const savedPlayersLS = savedPlayers()
    setSelectedPlayers(savedPlayersLS)
  },[])




  return (
    <>
      <div className="max-w-[1320px] m-auto mt-8">
        <ToastContainer />
        <Header coins={coins}></Header>
        <Banner handleCoins={handleCoins}></Banner>
        <Players
          players={players}
          handleSelected={handleSelected}
          selectedPlayers={selectedPlayers}
        ></Players>
      </div>
    </>
  );
}

export default App;
