'use strict';

const React = require('react');
const Header = require('./header');
const Filter = require('./filter');
const Navigation = require('./navigation');
const Card = require('./card');

class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      criteria: [caterpillar => true]
    }
  }

  componentDidMount() {
    console.log(this.state);
  }

  setCriteria(property, value) {
    this.setState(prevState => {
      criteria: prevState.criteria.push(caterpillar => caterpillar[property] === value)
    })
  }

  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">

        <Header />

        <div className="flex-parent-mm">

          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Filter setCriteria={this.setCriteria.bind(this)} />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <div className="flex-parent flex-parent--wrap">
              {this.props.caterpillars.filter(caterpillar =>
                this.state.criteria.every(criterion =>
                  criterion(caterpillar))).map(caterpillar =>
                    <Card caterpillar={caterpillar} key={caterpillar.name.common} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
