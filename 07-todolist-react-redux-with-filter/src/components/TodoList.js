import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = props.store.getState();

    props.store.subscribe(() => this.setState(props.store.getState()));
  }

  render() {
    
    const list = this.state.todos
      .filter(todo => todo.text.includes(this.state.filter))
      .map(todo =>
        <Todo
          store={this.props.store} 
          key={todo.id}
          todo={todo}
        />
      );
    return (
      <section className="TodoList">
        {list}
      </section>
    )
  }
}

export default TodoList;