import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterChanged } from '../action';


class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
  }

  render() {
    return (
      <section className="Filter">
        <span>Filter: </span>
        <input type="text" value={this.props.filterText} onChange={this.onTextChange} />
      </section>
    )
  }

  onTextChange(e) {
    this.props.filterChanged(e.target.value);
  }
}

const mapStateToProps = (state) => {
  return {
    filterText: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChanged: (filter) => dispatch(filterChanged(filter))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);