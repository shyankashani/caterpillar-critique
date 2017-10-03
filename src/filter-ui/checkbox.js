'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Rating = require('../rating');

class Checkbox extends React.Component {

  handleToggleCriteria() {
    this.props.toggleCriteria(this.props.feature, this.props.value);
  }

  render() {
    const value = this.props.feature === 'rating' ? <Rating score={this.props.value} /> : this.props.value

    return (
      <div className="col col--auto col--12-mm mb6-mm">
        <label className="checkbox-container txt-s">
          <input
            type="checkbox"
            onChange={this.handleToggleCriteria.bind(this)}
          />
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

module.exports = Checkbox;
