import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import _ from "lodash";

const renderEvolutions = evolutions => {
  if (_.isEmpty(evolutions)) return null;

  return evolutions.map(evolution => (
    <Link id={evolution.num} to={`/pokemon/${Number(evolution.num)}`}>
      <p>{evolution.name}</p>
    </Link>
  ));
};

const DetailPanel = ({ match, allPokemon }) => {
  const specifiedPokemonId = match.params.id;
  const specifiedPokemon = allPokemon.find(
    pokemon => pokemon.id.toString() === specifiedPokemonId.toString()
  );

  if (_.isEmpty(specifiedPokemon)) {
    return <div>Pokemon not found</div>;
  }
  const nextEvolutions = renderEvolutions(specifiedPokemon.next_evolution);
  const prevEvolutions = renderEvolutions(specifiedPokemon.prev_evolution);
  return (
    <div className="detail-panel">
      <h3>Name: {specifiedPokemon.name}</h3>
      <p>Number: {specifiedPokemon.num}</p>
      <img alt={`${specifiedPokemon.name}`} src={specifiedPokemon.img} />

      <p>Type: {specifiedPokemon.type.join(", ")}</p>
      <p>Weakness: {specifiedPokemon.weaknesses.join(", ")}</p>
      <p>Height: {specifiedPokemon.height}</p>
      <p>Weight: {specifiedPokemon.weight}</p>
      <p>Next Evolutions:</p>
      {nextEvolutions}
      <p>Prev Evolutions:</p>
      {prevEvolutions}
    </div>
  );
};

DetailPanel.propTypes = {
  pokemon: PropTypes.object
};

export default DetailPanel;
