## Follow steps to run this application

clone this repository
go to space-x-launches folder
do npm install
now npm start

## Details about project

# Technologies / Libraries/ Tools used

1. CRA
2. ReactJs
3. Javascript ES6+
4. React hooks
5. React bootstrap
6. React redux
7. Redux thunk
8. Reselect
9. React-lazy-load-image-component
10. Sass

# some highlights

1. Used hooks with functional components for component creations
2. Used media scripts for breakpoints and handling display accordingly
3. Used Redux for state management of application
4. Used reselect for optimization and creating memorized selectors
5. Used child component for wrapping similar formatting on multiple components
6. Used thunk as a middleware for asyncronous calls in redux actions
7. Used bootstrap library for styling in application
8. Used reactlazyload library to lazily load images in the application
9. Used react portal for loader implementation
10. filters are being dynamically created using dynamic component names, for easier manipulation.

# Project architecture

1. All components are placed in components folder
2. Each component folder have 4 files, ijdex.js, [someName]-view.jsx, [somename]-container.jsx and [somename]-.scss
3. container file do all business logic, like data fetching, manipulation, etc.
4. view file is for jsx display on screen
5. index file is to reexport default component as a named export, to avoid issues with export
6. some folder may not contain container file, as they are not required their
7. scss file is for component specific styling
8. some component folder have nested component folders, which are related to parent component only.
9. Mockdata folder is having some mocked data for filter creation
10. Filters are being created dynamically using some data, for easier manipulation
11. All redux related files, reducers, actions, selectors are kept in redux folder
12. all service related files, like api calling are kept in services folder
