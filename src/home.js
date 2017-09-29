'use strict';

const React = require('react');
const Header = require('./header');
const Filter = require('./filter');
const Navigation = require('./navigation');
const Card = require('./card');

class Home extends React.Component {
  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">

        <Header />

        <div className="flex-parent-mm">

          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Filter />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <div className="flex-parent flex-parent--wrap">
              {this.props.caterpillars.map(caterpillar => {
                return <Card caterpillar={caterpillar} key={caterpillar.name.common} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
