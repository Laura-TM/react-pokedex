import React, { useState } from "react";
import pokemonArray from "./PokemonArray";

function CaughtPokemon(props) {
  // Original
  // const date = new Date().toLocaleDateString();
  // let newCaughtState = [];
  // the above would not work the same way as adding the empty array inside the useState itself
  let [caught, setCaught] = useState([]);
  let [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  function addYourPokemon() {
    setCaught(caught.concat(pokemonNameInput));
  }

  // Original
  // function catchPokemon() {
  //   setCaught(caught.length);
  // }

  function addRandomPokemon() {
    const random = pokemonArray[~~(Math.random() * pokemonArray.length)];
    setCaught(caught.concat(random));
  }

  return (
    <div className="wrapper">
      <div className="updating-info">
        {/* <button onClick={catchPokemon}>Click me!</button> */}
        <p className="mi-frase">
          Caught {caught.length} Pokemon on {props.date}
        </p>
        <input
          type="text"
          className="input-field"
          placeholder="Type your Pokemon"
          value={pokemonNameInput}
          onChange={handleInputChange}
        />
        <button className="your-pokemon" onClick={addYourPokemon}>List your Pokemon!</button>
        <button className="random-pokemon" onClick={addRandomPokemon}>
          Add a random Pokemon!
        </button>
        <ul className="added-items">
          {caught.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default CaughtPokemon;
