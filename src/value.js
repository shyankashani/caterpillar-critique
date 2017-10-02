'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Rating = require('./rating');

class Value extends React.Component {

  render() {
    const value = [];
    if (this.props.feature === 'rating') {
      value.push(<Rating score={this.props.value} />)
    } else {
      value.push(this.props.value);
    }

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
          {value}
        </label>
      </li>
    );
  }
}

module.exports = Value;
