'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Filter = require('./filter');

class Sidebar extends React.Component {

  handleSearch(e) {
    this.props.searchCriteria(e.target.value)
  }

  render() {

    let i = 0;
    const filters = Object.keys(this.props.features).map(feature =>
      <Filter
        key={i++}
        name={feature}
        values={this.props.features[feature]}
        toggleCriteria={this.props.toggleCriteria}
      />
    );

    return (
      <div className="w120-mm pr24-mm mr36-mm mb24 pb72-mm">
        <div className="border-b pb3 border--gray-light mb24">
          <input
            type="search"
            className="input input--s txt-s txt-bold pl0 border--0 txt-uppercase"
            placeholder="Search"
            onChange={this.handleSearch.bind(this)}
          />
        </div>
        <div>
          {filters}
        </div>
      </div>
    );
  }
}

module.exports = Sidebar;
