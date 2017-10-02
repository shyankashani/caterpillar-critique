'use strict';

const React = require('react');
const Rating = require('./rating');

class Item extends React.Component {
  render() {
    return (
      <a href={`/${this.props.caterpillar.names.common.replace(/\s/g,'')}/`}>
        <div className="bg-gray-faint-on-hover txt-s grid py12 grid--gut24 align-middle border-t border--gray-faint">
            <div className="col col--3 txt-capitalize-first">
              {this.props.caterpillar.names.common}
            </div>
            <div className="col col--4">
              {this.props.caterpillar.names.scientific}
            </div>
            <div className="col col--2">
              {this.props.caterpillar.features.origin}
            </div>
            <div className="col col--3">
              <Rating score={this.props.caterpillar.features.rating} />
            </div>
        </div>
      </a>
    );
  }
}

module.exports = Item;
