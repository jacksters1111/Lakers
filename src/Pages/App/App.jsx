import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import './App.css';
import LakersPage from './../LakersPage/LakersPage';
import ShowLakerPage from './../ShowLakerPage/ShowLakerPage'

class App extends Component {

  constructor() {
    super();
    this.state = {
      lakers: [],
      lakerName: "",
      lakerNumber: 0,
      lakerPosition: "",
      lakerGamesPlayed: 0,
      lakerPoints: 0,
      lakerFieldGoals: 0,
      lakerHeight: "",
      lakerDOB: "",
      lakerAge: 0,
      lakerWeight: "",
      lakerHometown: "",
      lakerImage: ""
    }
  }

  componentDidMount() {
    fetch("/api/lakers")
    .then(res => res.json())
    .then(lakers => this.setState({ lakers }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Link to="/"><img src="https://i.imgur.com/lFU66dY.png"/></Link>
        <h2 className="Roster">2017-2018 Roster</h2>
        <Switch>
          <Route exact path='/' render={() =>
          <LakersPage
            lakers={this.state.lakers}
          />
          }/>
          <Route exact path="/laker/:id" render={ (props) =>
          <ShowLakerPage
            lakerData={this.state.lakers[props.match.params.id]}
          />
          }/>
        </Switch>
      </div>

    );
  }
}

export default App;
