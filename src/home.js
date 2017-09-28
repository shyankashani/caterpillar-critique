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
            <div className="flex-parent flex-parent--wrap">
                <span className="flex-child mr36 mb36 bg-darken5">
                  <a href="/saddleback/">
                    <div className="wmax180 hmax80">
                      <img className="hmax80" src="/assets/saddleback.jpg" alt="The Flambeau caterpillar" />
                    </div>
                    <div className="txt-h4 txt-bold my12 mx12">
                      Saddleback
                    </div>
                  </a>
                </span>
                <span className="flex-child mr36 mb36 bg-darken5">
                  <a href="/flambeau/">
                    <div className="wmax180 hmax80">
                      <img className="hmax80" src="/assets/flambeau.jpg" alt="The Flambeau caterpillar" />
                    </div>
                    <div className="txt-h4 txt-bold my12 mx12">
                      Flambeau
                    </div>
                  </a>
                </span>
                <span className="flex-child mr36 mb36 bg-darken5">
                  <a href="/swordgrass/">
                    <div className="wmax180 hmax80">
                      <img className="hmax80" src="/assets/swordgrass.jpg" alt="The Flambeau caterpillar" />
                    </div>
                    <div className="txt-h4 txt-bold my12 mx12">
                      Swordgrass
                    </div>
                  </a>
                </span>
                <span className="flex-child mr36 mb36 bg-darken5">
                  <a href="/cinnabar/">
                    <div className="wmax180 hmax80">
                      <img className="hmax80" src="/assets/cinnabar.jpg" alt="The Flambeau caterpillar" />
                    </div>
                    <div className="txt-h4 txt-bold my12 mx12">
                      Cinnabar
                    </div>
                  </a>
                </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
