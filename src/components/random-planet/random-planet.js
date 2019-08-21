import React, { Component } from "react";

import "./random-planet.css";
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {}
  };
  constructor() {
    super();
    this.loadPlanet();
  }
  onPlanetLoaded = planet => {
    console.log(planet);
    this.setState({ planet });
  };
  loadPlanet = () => {
    const id = 5;
    this.swapi.getPlanet(id).then(this.onPlanetLoaded);
  };
  render() {
    const {
      planet: { id, name, population, rotationPeriod, diametr }
    } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>Name: {name}</h4>
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
