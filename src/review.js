'use strict';

const React = require('react');
const Header = require('./header.js');
const Navigation = require('./navigation');
const Rating = require('./rating');

class Saddleback extends React.Component {
  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">

        <Header />

        <div className="flex-parent-mm">
          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Navigation active={this.props.caterpillar.names.common} />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <h2 className="mb36">
              <div className="txt-h2 txt-bold inline-block txt-capitalize-first">
                {this.props.caterpillar.names.common}
              </div>
              <div className="ml24 inline-block txt-em txt-bold txt-m color-gray ">
                {this.props.caterpillar.scientific}
              </div>
            </h2>

            <div className="wmax480">
              <img src={this.props.caterpillar.image} alt={`The ${this.props.caterpillar.names.common} caterpillar`} />
            </div>

            <div className="my24">
              <Rating score={this.props.caterpillar.features.score} size={'l'} />
            </div>

            <p className="mb12">
              {this.props.caterpillar.review}
            </p>

            <div className="txt-em txt-s color-gray">
              Reviewed {this.props.caterpillar.date}
            </div>

            <a
              href={this.props.caterpillar.link}
              className="link flex-parent flex-parent--center-cross mt24"
            >
              <div className="flex-child">
                <svg className="icon mr6" role="presentation">
                  <use xlinkHref="#icon-book" />
                </svg>
              </div>
              <div className="flex-child">
                Learn more on Wikipedia
              </div>
            </a>

          </div>
        </div>
      </div>
    );
  }
}

module.exports = Saddleback;
