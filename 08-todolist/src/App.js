import React, { Component } from 'react';
import Todos from './components/Todos';
import { Route, Switch, Link } from 'react-router-dom';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
      <section className="App">
        <section>
          <Link to='/stats'>Stats</Link>
          <Link to='/list'>List</Link>          
        </section>
        <Switch>
          <Route exact path="/list" component={Todos} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </section>
    )
  }
}

export default App;