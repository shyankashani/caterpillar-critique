'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Value = require('./value');

class Filter extends React.Component {

  render() {

    let i = 0;
    const values = Array.from(this.props.values).map(value =>
      <Value
        key={i++}
        name={this.props.name}
        value={value}
        toggleCriteria={this.props.toggleCriteria}
      />
    );

    return (
      <div className="mb30">
        <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
          {this.props.name}
        </div>
        <div className="grid grid--gut24">
          {values}
        </div>
      </div>
    );
  }
}

module.exports = Filter;
