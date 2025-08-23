import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";

function App() {
  return (
    <>
      <div className="max-w-[1320px] m-auto mt-8">
        <Header></Header>
        <Banner></Banner>
        <Players></Players>
      </div>
    </>
  );
}

export default App;
