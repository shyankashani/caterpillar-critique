'use strict';

const React = require('react');

class Card extends React.Component {
  render() {
    return (
      <span className="flex-child mr36 mb36 bg-darken5">
        <a href={`/${this.props.caterpillar.name.common}/`}>
          <div className="wmax180 hmax80">
            <img className="hmax80" src={this.props.caterpillar.image} alt={`The ${this.props.caterpillar.name.proper} caterpillar`} />
          </div>
          <div className="txt-h4 txt-bold my12 mx12">
            {this.props.caterpillar.name.proper}
          </div>
        </a>
      </span>
    );
  }
}

module.exports = Card;
