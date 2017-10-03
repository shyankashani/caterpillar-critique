"use strict";

const React = require("react");

class Header extends React.Component {
  render() {
    return (
      <div className="mb36 pb6 border-b border--gray-light">
        <h1 className="txt-l txt-uppercase txt-bold txt-fancy">
          <a href="/" className="link link--gray">
            Caterpillar Critique
          </a>
        </h1>
      </div>
    );
  }
}

module.exports = Header;
