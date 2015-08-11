var React = require('react');
var $ = require('jquery');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Template = require('./components/Template');
var Home = require('./components/Home');
var Login = require('./components/login/Login');
var Signup = require('./components/signup/Signup');
var Search = require('./components/search/Search');

var routes = (
  <Route path="/" handler={Template}>
    <DefaultRoute handler={Home}/>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="search" handler={Search}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.body);
});


