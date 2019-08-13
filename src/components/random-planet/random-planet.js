import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diametr: null
  };
  constructor() {
    super();
    this.loadPlanet();
  }
  loadPlanet = () => {
    
    this.swapi.getPlanet(1).then(planet => {
      this.setState({
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diametr: planet.diametr
      });
    });
  }
  render() {
    const {name, population, rotationPeriod, diametr} = this.state;
    
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
        />
        <div>
          <h4>Name {name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diametr}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
