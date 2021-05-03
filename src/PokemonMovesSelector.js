import React, { useState } from "react";
import PokemonMoves from "./PokemonMoves";

function PokemonMovesSelector() {
  const [id, setId] = useState(null);

  function handleBulbasaurClick() {
    setId(1);
  }
  function handleCharmanderClick() {
    setId(4);
  }

  function handleHide() {
    setId(null);
  }

  return (
    <div>
      <div className="button-container">
        <button className="bulbasaur-button" onClick={handleBulbasaurClick}>
          Fetch Bulbasaur
        </button>
        <button className="charmander-button" onClick={handleCharmanderClick}>
          Fetch Charmander
        </button>
        <button className="close-button" onClick={handleHide}>
          Close Moves
        </button>
        {id ? <PokemonMoves pokemonId={id} /> : null}
      </div>
    </div>
  );
}

export default PokemonMovesSelector;
