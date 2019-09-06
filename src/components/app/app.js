import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ErrorButton from "../error-button";

import './app.css';

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  }
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };
  componentDidCatch() {
    this.setState({hasError: true})
  }
  render() {
    if (this.state.hasError) {
      return < ErrorIndicator/>
    }
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <div>
        <Header />
        {planet}
        <button className="toggle-planet btn btn-warning btn-lng" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton/>
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}