import React from "react";
import PropTypes from "prop-types";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";

const App = ({ pokemon, onNameChange, onTypeChange, onWeaknessChange }) => {
  return (
    <div className="app">
      <h1>Pok&eacute;dex</h1>
      <SearchPanel
        onNameChange={onNameChange}
        onTypeChange={onTypeChange}
        onWeaknessChange={onWeaknessChange}
      />
      <ResultPanel pokemon={pokemon} />
    </div>
  );
};

App.propTypes = {
  pokemon: PropTypes.array,
  onNameChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onWeaknessChange: PropTypes.func.isRequired
};

export default App;
