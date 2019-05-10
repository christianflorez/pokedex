import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const SearchPanel = props => {
  return (
    <div className="search-panel">
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Example: Bulbasaur, Charizard, etc..."
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="type"
            placeholder="Example: Grass, Poison, etc..."
          />
        </Form.Group>
        <Form.Group controlId="weakness">
          <Form.Label>Weakness</Form.Label>
          <Form.Control type="text" placeholder="Example: Fire, Ice, etc..." />
        </Form.Group>
      </Form>
    </div>
  );
};

SearchPanel.propTypes = {};

export default SearchPanel;
