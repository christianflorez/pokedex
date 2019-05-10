import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const renderCards = allPokemon => {
  return allPokemon.map(pokemon => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pokemon.img} />
      <Card.Body>
        <Card.Title>
          {pokemon.id}. {pokemon.name}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  ));
};

const ResultPanel = ({ pokemon }) => {
  const cards = renderCards(pokemon);
  return <div className="result-panel">{cards}</div>;
};

ResultPanel.propTypes = {
  pokemon: PropTypes.object
};

export default ResultPanel;
