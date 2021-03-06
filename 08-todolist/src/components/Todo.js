import React, { Component }from 'react';
import { connect } from 'react-redux';
import { toggle, remove} from '../action';
import './Todo.css';

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <section className="Todo">
        <p>{todo.text}</p>
        <p className={todo.done ? 'Todo-completed' : 'Todo-uncompleted'} onClick={() => this.props.toggle(todo.id)}>
          {todo.done ? 'Completed' : 'Uncompleted'}
        </p>
        <button onClick={() => this.props.remove(todo.id)}>remove</button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (id) => dispatch(toggle(id)),
    remove: (id) => dispatch(remove(id))
  }
}

export default connect(undefined, mapDispatchToProps)(Todo);