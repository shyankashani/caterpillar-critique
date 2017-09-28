'use strict';

const React = require('react');
const Header = require('../header.js');
const Navigation = require('../navigation');
const Rating = require('../rating');

class Swordgrass extends React.Component {
  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">

        <Header />

        <div className="flex-parent-mm">
          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Navigation active="swordgrass" />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <h2 className="mb36">
              <div className="txt-h2 txt-bold inline-block">
                Swordgrass
              </div>
              <div className="ml24 inline-block txt-em txt-bold txt-m color-gray ">
                xylena exsoleta
              </div>
            </h2>

            <div className="wmax480">
              <img src="/assets/swordgrass.jpg" alt="The Flambeau caterpillar" />
            </div>

            <div className="my24">
              <Rating score={3} />
            </div>

            <p className="mb12">
              The Swordgrass, seen here sleeping, spends most of its time in the form of a perfect golden spiral. The moth can be found all across Eurasia.
            </p>

            <p className="mb12">
              The golden line running alongside the caterpillar's body is thought to be origin of the term "Golden Spiral".
            </p>

            <p className="mb12">
              I can use this caterpillar as a reference on my Math exam.
            </p>

            <div className="txt-em txt-s color-gray">
              Reviewed 9/27/2017
            </div>

            <a
              href="https://en.wikipedia.org/wiki/Xylena_exsoleta"
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

module.exports = Swordgrass;
