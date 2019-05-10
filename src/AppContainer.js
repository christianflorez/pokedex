import React, { Component } from "react";
import axios from "axios";
import App from "./App";

const API_URL =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
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
      this.setState({ data: result.data, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  render() {
    return <App data={this.state.data} />;
  }
}

export default AppContainer;
