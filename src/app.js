var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Home = require('./components/home/Home');

var routes = (
  <Route path="/" handler={Home}>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.body);
});