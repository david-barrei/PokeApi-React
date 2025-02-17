import { usePokemon } from "../store/PokemonContext.jsx";
import { PokemonCard } from "../components/PokemonCard";

export const Home = () => {
  const { pokemonList, loading } = usePokemon();

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {pokemonList.map(pokemon => (
          <div key={pokemon.id} className="col">
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};





