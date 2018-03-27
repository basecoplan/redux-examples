import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const list = this.props.todos
      .filter(todo => todo.text.includes(this.props.superFilter))
      .map(todo =>
        <Todo
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

const mapStateToProps = (state) => {
  return { 
    todos: state.todos,
    superFilter: state.filter
  };
}

export default connect(mapStateToProps)(TodoList);