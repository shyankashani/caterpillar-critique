'use strict';

const React = require('react');
const nanorouter = require('nanorouter');
const nanohref = require('nanohref');
const caterpillars = require('../data/caterpillarData');

const routes = [
  {
    path: '/',
    page: require('./home'),
    index: null
  }
]

let i = 0;

routes.splice(0, 0, ...caterpillars.map(caterpillar => {
  return {
    path: `/${caterpillar.names.common.replace(/\s/g,'')}/`,
    page: require('./review'),
    index: i++
  }
}))

function isRoute(path) {
  return routes.some(route => route.path === path);
}

const router = nanorouter();

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }

  componentDidMount() {
    routes.forEach(route => {
      router.on(route.path, () => {
        this.setState(() => {
          if (route.path === '/') {
            return { page: <route.page caterpillars={caterpillars} /> };
          } else {
            return { page: <route.page caterpillar={caterpillars[route.index]} /> };
          }
        });
      });
    });

    nanohref(location => {
      if (isRoute(location.pathname)) {
        router(location.pathname);
        window.history.pushState({}, null, location.pathname);
      } else {
        window.location.assign(location);
      }
    });

    window.onpopstate = () => {
      router(location.pathname);
    };

    router(document.location.pathname);
  }

  render() {
    return this.state.page;
  }
}

module.exports = Router;
