'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const Rating = require('./rating');

class Filter extends React.Component {

  render() {
    return (
      <div className="w120-mm pr24-mm mr36-mm mb24 pb72-mm">
        <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
          Rating
        </div>
        <ul>
          <li className="mb6">
            <label className="checkbox-container txt-s">
              <input type="checkbox" onChange={this.props.toggleCriteria} />
              <div className="checkbox mr6 checkbox--s-label">
                <svg className="icon"><use xlinkHref="#icon-check" /></svg>
              </div>
              <Rating score={3} size={'m'} />
            </label>
          </li>
          <li className="mb6">
            <label className="checkbox-container txt-s">
              <input type="checkbox" />
              <div className="checkbox mr6 checkbox--s-label">
                <svg className="icon"><use xlinkHref="#icon-check" /></svg>
              </div>
              <Rating score={2} size={'m'} />
            </label>
          </li>
          <li className="mb6">
            <label className="checkbox-container txt-s">
              <input type="checkbox" />
              <div className="checkbox mr6 checkbox--s-label">
                <svg className="icon"><use xlinkHref="#icon-check" /></svg>
              </div>
              <Rating score={1} size={'m'} />
            </label>
          </li>
        </ul>
        <div className="mb12 mt36 txt-bold color-darken50 txt-uppercase txt-s">
          Origin
        </div>
        <ul>
          <li className="mb6">
            <label className="checkbox-container txt-s" htmlFor="Americas">
              <input type="checkbox" id="Americas" />
              <div className="checkbox mr6 checkbox--s-label">
                <svg className="icon"><use xlinkHref="#icon-check" /></svg>
              </div>
              Americas
            </label>
          </li>
          <li className="mb6">
            <label className="checkbox-container txt-s" htmlFor="Europe">
              <input type="checkbox" id="Europe" />
              <div className="checkbox mr6 checkbox--s-label">
                <svg className="icon"><use xlinkHref="#icon-check" /></svg>
              </div>
              Europe
            </label>
          </li>
          <li className="mb6">
            <label className="checkbox-container txt-s" htmlFor="Asia">
              <input type="checkbox" id="Asia" />
              <div className="checkbox mr6 checkbox--s-label">
                <svg className="icon"><use xlinkHref="#icon-check" /></svg>
              </div>
              Asia
            </label>
          </li>
          <li className="mb6">
            <label className="checkbox-container txt-s" htmlFor="Africa">
              <input type="checkbox" id="Africa" />
              <div className="checkbox mr6 checkbox--s-label">
                <svg className="icon"><use xlinkHref="#icon-check" /></svg>
              </div>
              Africa
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

Filter.propTypes = {
  active: PropTypes.oneOf(['saddleback', 'flambeau', 'swordgrass', 'cinnabar'])
};

module.exports = Filter;
