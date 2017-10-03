"use strict";

const React = require("react");
const ReactDOM = require("react-dom");
const Feature = require("./feature");

class Filter extends React.Component {
  handleSearch(e) {
    this.props.search(e.target.value);
  }

  render() {
    const features = [];
    let i = 0;
    for (let feature in this.props.features) {
      features.push(
        <Feature
          feature={feature}
          values={Array.from(this.props.features[feature])}
          toggleCriteria={this.props.toggleCriteria}
          key={i++}
        />
      );
    }

    return (
      <div className="w120-mm pr24-mm mr36-mm mb24 pb72-mm">
        <div className="border-b pb3 border--gray-light mb24">
          <input
            type="search"
            className="input input--s txt-s txt-bold pl0 border--0 txt-uppercase"
            placeholder="Search name"
            onChange={this.handleSearch.bind(this)}
          />
        </div>
        <div>
          {features}
        </div>
      </div>
    );
  }
}

module.exports = Filter;
