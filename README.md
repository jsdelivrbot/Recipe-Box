# Recipe-Box

Recipe-Box is a demo project where a user can search an api of meals, or create a custom meal of their own, login, and order their meal. 
Everything is complete apart from the chefs! The project is mainly an exercise in using React, React-Router, and redux together in a way
that might be used in a single-page application with numerous page routes and actions that can be undertaken. The functionality of the app
was the priority and not the CSS or design. The application uses a dummy back-end on firebase.

The application is live on heroku at -

### Installing

To install simply fork the repo and type NPM install to install the dependencies from the package.JSON folder.

## Running the tests

The application uses Jest and Enzyme and be ran with npm test on a local system or you can go to https://codesandbox.io/s/8xq7monk18
and easily see all the tests in action.

### Break down into end to end tests

Most of the tests are focused on the various redux reducers, as managing state effectively through the various pages, such as the order and delivery information
pages, is crucial to eliminating bugs. A few unit tests have been placed on containers and components, but the majority of the pages do not have
many components.

## Deployment

The application is served with Express.js and is deployed on Heroku.

## Built With

* [React]- The web framework used
* [React-Router](https://maven.apache.org/) - Route Management
* [Redux] - State management
* [Redux-Thunk] - Sending async actions
* [Ramda/ Lodash] - Functional programming / Utility tools
* [Axios] - HTTP requests
* [Semantic-UI] - Layout framework
 

## Acknowledgments

* This project would not have been possible without gaining foundations in functional programming from -https://www.udemy.com/functional-programming-for-beginners-with-javascript/learn/v4/overview
* An excellent React guide - https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview
* Anybody wanting to learn about Redux should check - https://leanpub.com/redux-book/read 

