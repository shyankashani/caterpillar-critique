'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Rating = require('./rating');

class Value extends React.Component {

  render() {
    return (
      <li className="mb6">
        <label className="checkbox-container txt-s">
          <input
            type="checkbox"
            onChange={() => this.props.toggleCriteria(`${this.props.feature+this.props.value}`, this.props.feature, this.props.value)}
          />
          <div className="checkbox mr6 checkbox--s-label">
            <svg className="icon"><use xlinkHref="#icon-check" /></svg>
          </div>
          {this.props.value}
        </label>
      </li>
    );
  }
}

module.exports = Value;
