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
var BandSignup = require('./components/bandsignup/BandSignup');
var EditUserProfile = require('./components/edituserprofile/EditUserProfile');
var EditBandProfile = require('./components/editbandprofile/EditBandProfile');
var ProfileActions = require('./actions/ProfileActions');
var $ = require('jquery');
User = false;

var routes = (
  <Route path="/" handler={Template}>
    <DefaultRoute handler={Home}/>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="search" handler={Search}/>
    <Route name="user/:id" handler={UserProfile}/>
    <Route name="band/:id" handler={BandProfile}/>
    <Route name="bands/create" handler={BandSignup}/> 
    <Route name="/users/edit" handler={EditUserProfile}/>
    <Route name="/band/:id/edit" handler={EditBandProfile}/>
  </Route>
);


$.get('http://localhost:3000/users')
  .done(function(users) {
    ProfileActions.loadUsers(users);
  })

$.get('http://localhost:3000/bands')
  .done(function(bands) {
    ProfileActions.loadBands(bands);
    Router.run(routes, Router.HashLocation, function(Root) {
      React.render(<Root />, document.body);
    });
  })


