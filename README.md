# Caterpillar critique

A single-page web application publishing critical assessments of Nature's caterpillars.

## Development

### Dependencies

This project uses the following tools and libraries:

- [Assembly](http://mapbox.com/assembly) for CSS and icons. Please review that documentation to learn about the classes in use and see what else is possible.
- [React](https://facebook.github.io/react/) for JS components, along with the complementary packages react-dom and prop-types.
- [nanorouter](https://github.com/yoshuawuyts/nanorouter) and [nanohref](https://github.com/yoshuawuyts/nanohref) for barebones client-side routing.
- [Babel](https://github.com/babel/), along with babel-preset-es2015 and babel-preset-react, to compile JSX and ES2015 syntax to browser-friendly JS.
- [budo](https://github.com/mattdesl/budo) for the development server, which runs [browserify](https://github.com/substack/node-browserify) to bundle modules. budo serves `./index.html` and injects the compiled JS.

You can learn more by reading `package.json`.

### Getting started

```bash
# Install dependencies.
npm install

# Start the budo server.
# Console output will tell you the URL you can open in your browser.
# The browser should automatically refresh after you've made relevant changes.
npm run start
```

## Assignment

Please improve the site in the following ways:

- **Add 2 more caterpillar reviews**. We suggest browsing [the pictures of caterpillars on Wikimedia Commons](https://commons.wikimedia.org/wiki/Caterpillar), and going from there.
- As the number of reviews grows, the sidebar navigation list will become pretty long. **Implement a filter UI in the sidebar**, which a visitor could use to narrow down a long list and find caterpillars of interest.

The following ground rules will help you scope your work:

- Do not add any new dependencies.
- Follow the conventions established by the existing code.
- However, you are also free to refactor any code that you think should be refactored.

If you have any questions or concerns, please do not hesitate to contact us!
