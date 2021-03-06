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


___

## Approach

### 1. Familiarize

Add two more caterpillar reviews for familiarization with codebase.

### 2. Scope

Dissect needs to scope out assignment and break out individual tasks.

Establish assumptions about how the site is expected to behave, and outline deliverable tasks corresponding to these assumptions.


| Assumptions | Tasks |
| - | - |
|Number of reviews will grow.| - Isolate review data into separate data structure to simulate scale. <br> - Generate mock data at various scales for validation. <br> - Replace hard-coded routing with dynamic routing.  |
|Sidebar navigation list will be too long.| - Remove navigation list from sidebar. |
|Filter UI should be implemented in sidebar.| - Mock up filter UI to establish sidebar component structure. <br> - Write methods needed for searching by caterpillar name. <br> - Write methods needed to toggle filter criteria by feature.  |
|Users should see a long list of caterpillars.| - Replace home page body with dynamic list of caterpillars. <br> - Mock up list UI to establish component structure. |
|Users should be able to narrow down list.| - Correspond list to state on parent shared with filter UI. |

### 3. Establish guidelines

From explicit ground-rules and conventions in the codebase, establish guidelines for the project.

For example:

 - [x] No new dependencies.
 - [x] Use Assembly for CSS and Icons.
 - [x] Mobile-first.
 - [x] Generate indeterminate components in an array outside of DOM structure.
 - [x] Use numeric key for an ```i``` number of indeterminate child components.

### 4. Implement

Implement, revisiting 1 through 3 as needed.


## References

### Component structure mock-up

Below is a mock-up corresponding to the component structure implemented on the site.

![Caterpillar critique mockup](assets/mockup.png)

### Data structure

Below is an example of the JSON data structure for testing and validation. It is an array of any number of objects, each representing the data for a single caterpillar review. The ```features``` property is customizable –  the filter will dynamically conform to its shape. You can have any number of features by which to categorize the caterpillars, and those features can have any number of values.

```js
[
  {
  "id":1,
  "names": {
      "common": "saddleback",
      "scientific": "Acharia stimulea"
    },
    "features": {
      "rating":1,
      "size":"Small",
      "color":"Green",
      "appetite":"Average"
    },
    "link":"https://en.wikipedia.org/wiki/Saddleback_caterpillar",
    "review":"The Saddleback displays a wonderful range of colors and textures, all of them appealing. Although the moth is native to eastern North America, it has a distinctively southwestern vibe. The design on this caterpillar back would make a beautiful bedspread. I long to ride this caterpillar in a parade.",
    "date":"5/1/2017"
  }
]
```

To update data source:

```js
// router.js
const caterpillars = require("../data/source/example");
```
