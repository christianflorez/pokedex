import React from "react";
import PropTypes from "prop-types";

const App = props => {
  return (
    <div className="app">
      <h1>Pok&eacute;dex</h1>
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object
};

export default App;
