import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../../components/spinner";

export default class ItemList extends Component {
  swapi = new SwapiService();

  state = {
    peopleList: null
  }
  componentDidMount() {
    this.swapi.getAllPeople().then(peopleList => {
      this.setState({
        peopleList
      });
      // console.log("-----", peopleList);
    });
  }
  onClick = () => {
    // console.log('test');
  }
  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }
    const people = peopleList.map(({id, name}) => {
      return(
          <li className="list-group-item" 
            key={id}
             onClick={() => this.props.onItemSelected(id)} >
            {name}
          </li>
      )
    })

    return (
      <ul className="item-list list-group">
        {people}
      </ul>
    );
  }
}
