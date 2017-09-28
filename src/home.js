'use strict';

const React = require('react');
const Header = require('./header');
const Navigation = require('./navigation');

class Home extends React.Component {
  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">

        <Header />

        <div className="flex-parent-mm">

          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Navigation />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <p className="mb12">
              This website is dedicated to the critical assessment of Nature's caterpillars.
            </p>
            <p className="mb12">
              I will post a new critique every week, until I run out of caterpillars or willpower. Please enjoy!
            </p>
            <div className="flex-parent flex-parent--wrap">
              <span className="flex-child mr24 mb24">
                <div className="wmax240 hmax80 mb12">
                  <img className="hmax80" src="/assets/saddleback.jpg" alt="The Flambeau caterpillar" />
                </div>
                <div className="txt-h4 txt-bold">
                  Saddleback
                </div>
              </span>
              <span className="flex-child mr24 mb24">
                <div className="wmax240 hmax80 mb12">
                  <img className="hmax80" src="/assets/flambeau.jpg" alt="The Flambeau caterpillar" />
                </div>
                <div className="txt-h4 txt-bold">
                  Flambeau
                </div>
              </span>
              <span className="flex-child mr24 mb24">
                <div className="wmax240 hmax80 mb12">
                  <img className="hmax80" src="/assets/swordgrass.jpg" alt="The Flambeau caterpillar" />
                </div>
                <div className="txt-h4 txt-bold">
                  Swordgrass
                </div>
              </span>
              <span className="flex-child mr24 mb24">
                <div className="wmax240 hmax80 mb12">
                  <img className="hmax80" src="/assets/cinnabar.jpg" alt="The Flambeau caterpillar" />
                </div>
                <div className="txt-h4 txt-bold">
                  Cinnabar
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
