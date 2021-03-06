"use strict";

const React = require("react");
const nanorouter = require("nanorouter");
const nanohref = require("nanohref");
const caterpillars = require("../data/testData0");

const routes = [];
for (let i = 0; i < caterpillars.length; i++) {
  routes.push({
    path: `/${caterpillars[i].names.common.replace(/\s/g, "")}/`,
    page: require("./review"),
    index: i
  });
}
routes.push({ path: "/", page: require("./home"), index: caterpillars.length });

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
        this.setState(
          () =>
            route.path === "/"
              ? { page: <route.page caterpillars={caterpillars} /> }
              : { page: <route.page caterpillar={caterpillars[route.index]} /> }
        );
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
