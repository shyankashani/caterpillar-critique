'use strict';

const React = require('react');

class Card extends React.Component {
  render() {
    return (
      <span className="flex-child mr36 mb36 bg-darken5">
        <a href={`/${this.props.caterpillar.names.common.replace(/\s/g,'')}/`}>
          <div className="wmax180 hmax80">
            <img className="hmax80" src={this.props.caterpillar.image} alt={`The ${this.props.caterpillar.names.common} caterpillar`} />
          </div>
          <div className="txt-s txt-bold my12 mx12 .txt-truncate">
            {this.props.caterpillar.names.common}
          </div>
        </a>
      </span>
    );
  }
}

module.exports = Card;
