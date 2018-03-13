import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

const Counter = (props) => {
  return (
    <section>
      {props.value}
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </section>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    store.subscribe(() => {
      this.setState({value: store.getState()});
    });

    this.state = {
      value: store.getState()
    }
  }

  render() {
    return (
      <Counter
        value={this.state.value}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
