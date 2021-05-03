import React from "react";

function Logo(props) {
  //   const appName = "Laura's Pokedex";
  return (
    <div className="basic-info">
      <header>
        <h1 className="header">"Welcome to the {props.appName}"</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pokedex"
          onClick={props.handleClick}
        />
      </header>
    </div>
  );
}

export default Logo;
