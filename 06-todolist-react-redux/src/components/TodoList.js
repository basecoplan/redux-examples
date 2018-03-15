import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: props.store.getState() }

    props.store.subscribe(() => this.setState({ todos: props.store.getState()}));
  }

  render() {
    const list = this.state.todos
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