'use strict';

const React = require('react');
const nanorouter = require('nanorouter');
const nanohref = require('nanohref');
const Home = require('./home');

const caterpillars = require('../data/mockData');

const routes = [
  {
    path: '/',
    page: require('./home')
  }
]

routes.splice(1, 0, ...Object.values(caterpillars).map(caterpillar => {
  return {
    path: `/${caterpillar.name.common}/`,
    page: require('./review')
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
    console.log(caterpillars);
    routes.forEach(route => {
      router.on(route.path, () => {
        this.setState(() => {
          if (route.path === '/') {
            return { page: <route.page caterpillars={Object.values(caterpillars)} /> };
          } else {
            return { page: <route.page caterpillar={caterpillars[route.path.slice(1, route.path.length-1)]} /> };
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
