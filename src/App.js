import React from "react";
import PropTypes from "prop-types";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";

const App = ({ pokemon }) => {
  return (
    <div className="app">
      <h1>Pok&eacute;dex</h1>
      <SearchPanel />
      <ResultPanel pokemon={pokemon} />
    </div>
  );
};

App.propTypes = {
  pokemon: PropTypes.array
};

export default App;
