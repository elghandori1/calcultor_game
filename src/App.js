import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const GameDataContext = React.createContext();
const App = () => {
  return (
    <BrowserRouter>
      <div className="container mt-2">
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
