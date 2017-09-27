'use strict';

const React = require('react');
const nanorouter = require('nanorouter');
const nanohref = require('nanohref');
const Home = require('./home');

const routes = [
  {
    path: '/',
    page: require('./home')
  },
  {
    path: '/saddleback/',
    page: require('./caterpillars/saddleback')
  },
  {
    path: '/flambeau/',
    page: require('./caterpillars/flambeau')
  }
];

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
        this.setState({ page: <route.page /> });
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
