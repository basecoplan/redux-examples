import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load } from '../action';
import Todo from './Todo';

class TodoList extends Component {
  
  componentDidMount() {
    this.props.loadTodos();
  }

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
    superFilter: state.filter,
    status: state.status
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTodos: () => dispatch(load())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);