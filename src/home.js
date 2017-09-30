'use strict';

const React = require('react');
const Header = require('./header');
const Sidebar = require('./sidebar');
const Navigation = require('./navigation');
const Card = require('./card');

class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      features: {},
      criteria: {}
    }
  }

  componentDidMount() {
    let nextFeatures = {};
    this.props.caterpillars.forEach(caterpillar => {
      for (let feature in caterpillar.features) {
        if (nextFeatures.hasOwnProperty(feature)) {
          nextFeatures[feature].add(caterpillar.features[feature])
        } else {
          nextFeatures[feature] = new Set([caterpillar.features[feature]])
        }
      }
    })
    this.setState({ features: nextFeatures })
  }

  toggleCriteria(criteriaName, feature, value) {
    this.setState(prevState => {
      if (prevState.criteria.hasOwnProperty(criteriaName)) {
        let nextCriteria = prevState.criteria;
        delete nextCriteria[criteriaName];
        return { criteria: nextCriteria };
      } else {
        let newCriteria = {};
        newCriteria[criteriaName] = caterpillar => caterpillar.features[feature] === value;
        return { criteria: Object.assign(prevState.criteria, newCriteria) }
      }
    })
  }

  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">

        <Header />

        <div className="flex-parent-mm">

          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Sidebar features={this.state.features} toggleCriteria={this.toggleCriteria.bind(this)} />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <div className="flex-parent flex-parent--wrap">
              {this.props.caterpillars.filter(caterpillar =>
                Object.values(this.state.criteria).every(criterion =>
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
