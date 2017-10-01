'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Rating = require('./rating');
const Filter = require('./filter');

class Sidebar extends React.Component {

  handleChange(e) {
    this.props.searchCriteria(e.target.value)
  }

  render() {
    return (
      <div className="w120-mm pr24-mm mr36-mm mb24 pb72-mm">
        <input type="search" className="input input--s txt-s" placeholder="Search"
          onChange={this.handleChange.bind(this)} />
        <div>
          {Object.keys(this.props.features).map(feature =>
            <Filter
              feature={{ name: feature, values: this.props.features[feature] }}
              toggleCriteria={this.props.toggleCriteria}
            />
          )}
        </div>
      </div>
    );
  }
}

module.exports = Sidebar;
