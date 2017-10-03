'use strict';

const React = require('react');
const Header = require('./header');
const ListItem = require('./listItem');
const Filter = require('./filter-ui/filter');

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      features: {},
      criteria: {}
    }
  }

  toggleCriteria(feature, value) {
    this.setState(prevState => {
      if (prevState.criteria.hasOwnProperty(`${feature}${value}`)) {
        let nextCriteria = prevState.criteria;
        delete nextCriteria[`${feature}${value}`];
        return { criteria: nextCriteria };
      } else {
        let newCriteria = {};
        newCriteria[`${feature}${value}`] = caterpillar => caterpillar.features[feature] === value;
        return { criteria: Object.assign(prevState.criteria, newCriteria) }
      }
    })
  }

  search(query) {
    this.setState(prevState => {
      let nextCriteria = prevState.criteria;
      nextCriteria.searchCriteria = caterpillar => caterpillar.names.common.toLowerCase().includes(query.toLowerCase());
      return { criteria: nextCriteria };
    })
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

  render() {
    const list = [];
    for (let i = 0; i < this.props.caterpillars.length; i++) {
      const satisfiesCriteria = Object.values(this.state.criteria).every(criterion => criterion(this.props.caterpillars[i]));
      if (satisfiesCriteria) {
        list.push(
          <ListItem caterpillar={this.props.caterpillars[i]} key={i} />
        );
      }
    }

    return (
      <div className="p24 p72-mm wmax960 mx-auto">
        <Header />
        <div className="flex-parent-mm">
          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Filter features={this.state.features}
              toggleCriteria={this.toggleCriteria.bind(this)}
              search={this.search.bind(this)}
            />
          </div>
          <div className="flex-child-mm flex-child--grow-mm">
            <div className="txt-s grid pb6 pt3 grid--gut36 align-middle txt-bold border-b border--gray-faint">
              <div className="col col--2">
              </div>
              <div className="col col--3 txt-capitalize-first">
                Common name
              </div>
              <div className="col col--4">
                Scientific name
              </div>
              <div className="col col--3">
                Rating
              </div>
            </div>
            {list}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
