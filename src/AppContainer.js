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

  onNameChange = e => {
    const nameFilter = e.target.value;
    this.setState({ nameFilter });
  };

  onTypeChange = e => {
    const typeFilter = e.target.value;
    this.setState({ typeFilter });
  };

  onWeaknessChange = e => {
    const weaknessFilter = e.target.value;
    this.setState({ weaknessFilter });
  };

  filterPokemonData = () => {
    let allPokemon = this.state.pokemon;
    return allPokemon.filter(pokemon => {
      const isNameInSearch = pokemon.name
        .toLowerCase()
        .includes(this.state.nameFilter.toLowerCase());

      const isTypeInSearch = pokemon.type.some(el => {
        return el.toLowerCase().includes(this.state.typeFilter.toLowerCase());
      });

      const isWeaknessInSearch = pokemon.weaknesses.some(el => {
        return el
          .toLowerCase()
          .includes(this.state.weaknessFilter.toLowerCase());
      });

      return isNameInSearch && isTypeInSearch && isWeaknessInSearch;
    });
  };

  render() {
    const pokemon = this.filterPokemonData();

    return (
      <App
        pokemon={pokemon}
        onNameChange={this.onNameChange}
        onTypeChange={this.onTypeChange}
        onWeaknessChange={this.onWeaknessChange}
      />
    );
  }
}

export default AppContainer;
