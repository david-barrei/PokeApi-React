import { useParams } from "react-router-dom";
import { usePokemon } from "../store/PokemonContext.jsx";

export const PokemonDetails = () => {
  const { id } = useParams();
  const { pokemonList } = usePokemon();
  const pokemon = pokemonList.find(p => p.id === Number(id));

  if (!pokemon) return <div>Pokémon not found</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            className="img-fluid"
            alt={pokemon.name}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-capitalize">{pokemon.name}</h1>
          <h5>Type: {pokemon.types.map(t => t.type.name).join(", ")}</h5>
          <h5>Height: {pokemon.height / 10}m</h5>
          <h5>Weight: {pokemon.weight / 10}kg</h5>
        </div>
      </div>
    </div>
  );
};