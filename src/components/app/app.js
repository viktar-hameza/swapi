import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  }
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
    // console.log(id)
  }

  

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <div>
        <Header />
        {planet}
        <button className="btn btn-primary" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}