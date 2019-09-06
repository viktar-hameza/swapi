
import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from "../person-details";
// import ItemDetails from '../item-details/item-details';
// import SwapiService from '../../services/swapi-service';
// import ErrorBoundry from '../error-boundry';
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

import './people-page.css';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 11,
    hasError: false
  };
  componentDidCatch() {
    this.setState({hasError: true})
  }
  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
    // console.log(id)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return(
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}