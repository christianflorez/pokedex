import React, { Component } from "react";
import axios from "axios";
import App from "./App";

const API_URL =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      nameFilter: "",
      typeFilter: "",
      weaknessFilter: "",
      isLoading: true,
      error: null
    };
  }

  componentDidMount = async () => {
    try {
      const result = await axios.get(API_URL);
      this.setState({
        pokemon: result && result.data && result.data.pokemon,
        isLoading: false
      });
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  render() {
    console.log(this.state.pokemon);

    return <App pokemon={this.state.pokemon} />;
  }
}

export default AppContainer;
