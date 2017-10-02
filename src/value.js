'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Rating = require('./rating');

class Value extends React.Component {

  handleToggle() {
    this.props.toggleCriteria(this.props.name, this.props.value);
  }

  render() {
    const value = this.props.name === 'rating'
      ? <Rating score={this.props.value} size="m" />
        : this.props.value

    return (
      <div className="col col--auto col--12-mm mb6-mm">
        <label className="checkbox-container txt-s">
          <input type="checkbox" onChange={this.handleToggle.bind(this)} />
          <div className="checkbox mr6 checkbox--s-label">
            <svg className="icon icon--xs icon-inliner">
              <use xlinkHref="#icon-check" />
            </svg>
          </div>
          {value}
        </label>
      </div>
    );
  }
}

module.exports = Value;
