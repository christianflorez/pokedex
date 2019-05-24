import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";
import DetailPanel from "./DetailPanel";

const App = ({
  allPokemon,
  filteredPokemon,
  onNameChange,
  onTypeChange,
  onWeaknessChange
}) => {
  return (
    <Router>
      <div className="app">
        <h1>Pok&eacute;dex</h1>
        <SearchPanel
          onNameChange={onNameChange}
          onTypeChange={onTypeChange}
          onWeaknessChange={onWeaknessChange}
        />
        <Route
          path="/pokemon/:id"
          render={({ match }) => (
            <DetailPanel allPokemon={allPokemon} match={match} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <ResultPanel filteredPokemon={filteredPokemon} />}
        />
      </div>
    </Router>
  );
};

App.propTypes = {
  allPokemon: PropTypes.array,
  filteredPokemon: PropTypes.array,
  onNameChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onWeaknessChange: PropTypes.func.isRequired
};

export default App;
