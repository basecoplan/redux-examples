import React, { Component } from 'react';
import Filter from './Filter';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class Todos extends Component {
  render() {
    return (
      <section className="Todos">
        <Filter />
        <AddTodo />
        <TodoList />
      </section>
    )
  }
}

export default Todos;