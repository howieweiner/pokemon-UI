# Software Architecture

The web application has been built with the following frameworks:

* React
* Typescript
* Next.js
* Tailwind CSS

### GraphQL
GraphQL queries are made using `fetch`. It was not considered necessary to use a 3rd
party library, such as Apollo Client.

### React
The React application has been designed using the [Flux Architecture](https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/) pattern. This has been achieved using React's `useReducer` hook along with `ContextProviders` and custom hooks. All this code lives in the [state folder](../state])

### Next.js
Next.js has been used to build the web application and to serve the pages. This allows for Server-Side Rendering (SSR). The Next.js router is also used so that the
application can support IDs in the URL. It is possible to put any
valid ID (001 - 151) into the URL and the page will be rendered server-side.

### Tests
Unit tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Unit tests are far from complete. However, tests have been added across the application to demonstrate how it is possible to mock requests, state etc.
