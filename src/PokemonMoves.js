import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
  const [pokemonData, setpokemonData] = useState(null);

  useEffect(() => {
    console.log("Fetching data from Pokeapi");
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setpokemonData(data);
      });
  }, [props.pokemonId]);

  // Option with if-else

  //   if (pokemonData) {
  //     return (
  //       <div className="container">
  //         <p>{pokemonData.name}'s moves:</p>
  //         <ul className="movesList">
  //           {pokemonData.moves.map((move, index) => {
  //             return <li className="movesItems" key={index}>{move.move.name}</li>;
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }

  // Below, with a ternary operator

  return (
    <div className="container">
      {pokemonData ? (
        <div>
          <p>{pokemonData.name.toUpperCase()}'s MOVES:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default PokemonMoves;
