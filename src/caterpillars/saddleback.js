'use strict';

const React = require('react');
const Navigation = require('../navigation');
const Rating = require('../rating');

class Saddleback extends React.Component {
  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">
        <div className="mb36 pb6 border-b border--gray-light">
          <h1 className="txt-l txt-uppercase txt-bold txt-fancy">
            <a href="/" className="link link--gray">
              Caterpillar Critique
            </a>
          </h1>
        </div>

        <div className="flex-parent-mm">
          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Navigation active="saddleback" />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <h2 className="mb36">
              <div className="txt-h2 txt-bold inline-block">
                Saddleback
              </div>
              <div className="ml24 inline-block txt-em txt-bold txt-m color-gray ">
                acharia stimulea
              </div>
            </h2>

            <div className="wmax480">
              <img src="/assets/saddleback.jpg" alt="The Flambeau caterpillar" />
            </div>

            <div className="my24">
              <Rating score={3} />
            </div>

            <p className="mb12">
              The Saddleback displays a wonderful range of colors and textures, all of them appealing. Although the moth is native to eastern North America, it has a distinctively southwestern vibe.
            </p>

            <p className="mb12">
              The design on this caterpillar's back would make a beautiful bedspread.
            </p>

            <p className="mb12">
              I long to ride this caterpillar in a parade.
            </p>

            <div className="txt-em txt-s color-gray">
              Reviewed 5/1/2017
            </div>

            <a
              href="https://en.wikipedia.org/wiki/Saddleback_caterpillar"
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
