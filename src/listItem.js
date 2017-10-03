'use strict';

const React = require('react');
const Rating = require('./rating');

class ListItem extends React.Component {
  render() {
    return (
      <a href={`/${this.props.caterpillar.names.common.replace(/\s/g,'')}/`}>
        <div className="txt-s bg-gray-faint-on-hover grid py12 grid--gut36 align-middle border-t border--gray-faint flex-parent flex-parent--center-cross">
          <div className="col col--2">
            <img src={this.props.caterpillar.image} alt={`The ${this.props.caterpillar.names.common} caterpillar`} />
          </div>
          <div className="col col--3 txt-capitalize-first">
            {this.props.caterpillar.names.common}
          </div>
          <div className="col col--4">
            {this.props.caterpillar.names.scientific}
          </div>
          <div className="col col--3">
            <Rating score={this.props.caterpillar.features.rating} />
          </div>
        </div>
      </a>
    );
  }
}

module.exports = ListItem;
