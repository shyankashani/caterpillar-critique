'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Checkbox = require('./checkbox');

class Feature extends React.Component {

  render() {
    const checkboxes = [];
    for (let i = 0; i < this.props.values.length; i++) {
      checkboxes.push(
        <Checkbox
          feature={this.props.feature}
          value={this.props.values[i]}
          toggleCriteria={this.props.toggleCriteria}
          key={i}
        />
      );
    }

    return (
      <div className="mb30">
        <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
          {this.props.feature}
        </div>
        <div className="grid grid--gut24">
          {checkboxes}
        </div>
      </div>
    );
  }
}

module.exports = Feature;
