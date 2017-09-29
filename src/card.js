'use strict';

const React = require('react');

class Card extends React.Component {
  render() {
    return (
      <span className="flex-child mr36 mb36 bg-darken5" ref="saddleback">
        <a href={`/${this.props.info.commonName}/`}>
          <div className="wmax180 hmax80">
            <img className="hmax80" src={`/assets/${this.props.info.commonName}.jpg`} alt={`The ${this.props.info.commonName} caterpillar`} />
          </div>
          <div className="txt-h4 txt-bold my12 mx12">
            {this.props.info.commonName.charAt(0).toUpperCase() + this.props.info.commonName.slice(1)}
          </div>
        </a>
      </span>
    );
  }
}

module.exports = Card;
