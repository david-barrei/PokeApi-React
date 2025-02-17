
import { usePokemon } from "../store/PokemonContext";
import { useEffect, useRef } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";

export const FavoritesDropdown = () => {
  const { favorites, pokemonList, toggleFavorite, showFavorites, setShowFavorites } = usePokemon();
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFavorites(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const favoritePokemons = pokemonList.filter(p => favorites.includes(p.id));

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className={`dropdown-menu ${showFavorites ? "show" : ""}`} 
           style={{ right: 0, left: "auto", minWidth: "300px" }}>
        <div className="dropdown-header d-flex justify-content-between align-items-center">
          <h5 className="m-0">Pokémon Favoritos</h5>
          <button 
            className="btn btn-link p-0"
            onClick={() => setShowFavorites(false)}
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="dropdown-divider"></div>
        
        <div className="px-2" style={{ maxHeight: "400px", overflowY: "auto" }}>
          {favoritePokemons.map(pokemon => (
            <div key={pokemon.id} className="d-flex align-items-center py-2">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                className="rounded-circle"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <span className="ms-2 text-capitalize">{pokemon.name}</span>
              <button 
                className="btn btn-link text-danger ms-auto"
                onClick={() => toggleFavorite(pokemon.id)}
              >
                <FaHeart />
              </button>
            </div>
          ))}
          
          {favoritePokemons.length === 0 && (
            <div className="text-center py-3 text-muted">
              No hay favoritos aún
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


