
import { usePokemon } from "../store/PokemonContext.jsx";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const PokemonCard = ({ pokemon }) => {
  const { favorites, toggleFavorite } = usePokemon();
  const navigate = useNavigate();
  
  const isFavorite = favorites.includes(pokemon.id);

  return (
    <div className="card mb-3 shadow-sm">
      <img 
        src={pokemon.sprites.other["official-artwork"].front_default} 
        className="card-img-top p-3" 
        alt={pokemon.name}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <button 
            className="btn btn-primary"
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          >
            Learn More
          </button>
          <button 
            className="btn btn-link text-danger"
            onClick={() => toggleFavorite(pokemon.id)}
          >
            {isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};