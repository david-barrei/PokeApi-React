
import { usePokemon } from "../store/PokemonContext";
import { FaHeart } from "react-icons/fa";
import { FavoritesDropdown } from "./FavoritesDropdown";

export const Navbar = () => {
  const { favorites, setShowFavorites } = usePokemon();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <span className="navbar-brand">Pokédex</span>
        
        <div className="ms-auto position-relative">
          <button 
            className="btn btn-outline-light position-relative"
            onClick={() => setShowFavorites(prev => !prev)}
          >
            <FaHeart className="me-1" />
            Favoritos
            {favorites.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {favorites.length}
              </span>
            )}
          </button>
          
          <FavoritesDropdown />
        </div>
      </div>
    </nav>
  );
};

