import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const renderCards = allPokemon => {
  return allPokemon.map(pokemon => (
    <Card key={pokemon.id}>
      <Card.Img variant="top" src={pokemon.img} />
      <Card.Body>
        <Card.Title>
          {pokemon.num}. {pokemon.name}
        </Card.Title>

        <p>
          <strong>Type:</strong> {pokemon.type.join(", ")}
        </p>
        <p>
          <strong>Weaknesses:</strong> {pokemon.weaknesses.join(", ")}
        </p>
      </Card.Body>
    </Card>
  ));
};

const ResultPanel = ({ pokemon }) => {
  const cards = renderCards(pokemon);
  return (
    <div className="result-panel">
      <h2>Results:</h2>
      <div className="results">{cards}</div>
    </div>
  );
};

ResultPanel.propTypes = {
  pokemon: PropTypes.array
};

export default ResultPanel;
