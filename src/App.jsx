import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./store/pokemonStore.jsx";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { PokemonDetails } from "./views/PokemonDetails";

import './App.css'

export const App = () => {
  return (
    <PokemonProvider>
      <BrowserRouter>
      <Navbar /> 
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
      </BrowserRouter>
      
    </PokemonProvider>
  );
};
export default App
