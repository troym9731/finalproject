var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Template = require('./components/Template');
var Home = require('./components/Home');
var Login = require('./components/login/Login');
var Signup = require('./components/signup/Signup');
var Search = require('./components/search/Search');
var UserProfile = require('./components/userprofile/UserProfile');
var BandProfile = require('./components/bandprofile/BandProfile');

var routes = (
  <Route path="/" handler={Template}>
    <DefaultRoute handler={Home}/>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="search" handler={Search}/>
    <Route name="user/:id" handler={UserProfile}/>
    <Route name="band/:id" handler={BandProfile}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.body);
});


