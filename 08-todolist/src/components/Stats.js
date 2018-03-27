import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {
  render() {
    return (
      <section>
        <p>Done: {this.props.done}</p>
        <p>Undone: {this.props.undone}</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const doneTodos = state.todos.filter(t => t.done);
  return {
    done: doneTodos.length,
    undone: state.todos.length - doneTodos.length
  };
}

export default connect(mapStateToProps)(Stats);
