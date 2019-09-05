import React, { Component } from "react";

import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";

export default class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };
  // constructor() {
  //   console.log('contructor');
  //   super();
   
  //   // clearInterval(this.interval)
  // }
  componentDidMount() {
    this.loadPlanet();
    // this.interval = setInterval(this.loadPlanet, 10000);
    // console.log('Did mount');
  }
  componentWillUnmount() {
    // console.log('Will Mount')
  }
  onPlanetLoaded = planet => {
    // console.log(planet);
    this.setState({ 
      planet,
      loading: false });
  };
  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }
  loadPlanet = () => {
    // console.log('updatePlanet')
    const id = Math.floor(Math.random()*25) + 3;
    this.swapi
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  };
  render() {
    // console.log('render')
    const {
      planet, loading, error
    } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diametr } = planet;
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}