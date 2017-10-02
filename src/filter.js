'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Rating = require('./rating');
const Value = require('./value');

class Filter extends React.Component {

  render() {

    const values = Array.from(this.props.feature.values).map(value =>
      <Value feature={this.props.feature.name} value={value} toggleCriteria={this.props.toggleCriteria} />
    );

    return (
      <div className="mt36">
        <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
          {this.props.feature.name}
        </div>
        <ul>
          {values}
        </ul>
      </div>
    );
  }
}

module.exports = Filter;
