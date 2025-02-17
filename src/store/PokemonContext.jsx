
import { createContext, useContext } from "react";

export const PokemonContext = createContext(null);

export const usePokemon = () => {
  return useContext(PokemonContext);
};




