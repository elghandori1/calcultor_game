import React from "react";
import Home from "./components/Home";
import Choose from "./components/Choose";
import Infos from "./components/Infos";
import Startgame from "./components/Startgame";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const GameDataContext = React.createContext();
const App = () => {
  const [gameData, setGameData] = React.useState({ number: null, operation: null });
  return (
    <BrowserRouter>
     <GameDataContext.Provider value={{ gameData, setGameData }}>
      <div className="container">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path='/infos' element={<Infos/>}/>
        <Route path='/start_game' element={<Startgame/>} />
       </Routes>
      </div>
      </GameDataContext.Provider>
    </BrowserRouter>
  );
};
export default App;
