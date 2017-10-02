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


## Task breakdown

### The number of reviews will grow

##### Isolate review data from UI in order to test filter at different scales.
##### Dynamically generate routes to handle changing test data.
##### Standardize review data structure for scalability and to simulate API.

#### Generate mock data at various scales for testing and validation.

Below is an example of the JSON data structure. It is an array with a single object in it, representing the data for a single review. The **features** property – with the exception of **rating** – is entirely customizable. You can have any number of features by which to categorize the caterpillars, and those features can have any number of values. The filter UI will dynamically conform the the shape of this input data.

```bash
exampleJSON = [
  { "names": {
      "common": "Ring-tailed possum",
      "scientific": "Pseudocheirus peregrinus"
    },
    "features": {
      "rating":1,
      "size":"Small",
      "lifetime":"3 months",
      "appetite":"Average"
    },
    "link":"https://en.wikipedia.org/wiki/Common_ringtail_possum",
    "review":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "date":"02/24/2017"
  }
]
```

**The sidebar navigation list will become too long:**

- Move list of reviews out of the navigation sidebar.


**A filter UI will need to be implemented in the sidebar:**

- Replace sidebar navigation with filter UI.


Visitors need to narrow down a long list to find caterpillars of interest:

- Replace sidebar navigation with filter UI.
