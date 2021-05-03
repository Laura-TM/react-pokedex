import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="city-container">
      <input
        type="text"
        className="input-text"
        placeholder="Somewhere"
        value={city}
        onChange={updateCity}
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
