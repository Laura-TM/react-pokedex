import React from "react";

function BestPokemon(props) {
  return (
    <div className="abilities">
      <p className="favourite">My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;
