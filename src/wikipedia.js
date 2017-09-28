'use strict';

const React = require('react');

class Wikipedia extends React.Component {
  render() {
    return (
      <a
        href={`https://en.wikipedia.org/wiki/${this.props.name}`}
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
    );
  }
}

module.exports = Wikipedia;
