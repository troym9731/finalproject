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
User = {
      "first_name": "Troy",
      "last_name": "Mullaney",
      "image": "./images/me.jpg",
      "email": "troym9731@gmail.com",
      "password": "password",
      "address": "1363 W. 14th St.",
      "zipcode": "85281",
      "genre": "Rock",
      "inBand": [
        1
      ],
      "description": "I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41. Some of my favorite bands include Yellowcard and Breaking Benjamin.I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41. Some of my favorite bands include Yellowcard and Breaking Benjamin.I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41. Some of my favorite bands include Yellowcard and Breaking Benjamin.I'm a huge fan of pop punk band such as Blink-182, Green Day, and Sum 41. Some of my favorite b",
      "instruments": [
        "Guitar",
        "Piano",
        "Violin"
      ],
      "id": 1
    };

var routes = (
  <Route path="/" handler={Template}>
    <DefaultRoute handler={Home}/>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="search" handler={Search}/>
    <Route name="user/:id" handler={UserProfile}/>
    <Route name="band/:id" handler={BandProfile}/>
    <Route name="bands/create" handler={BandSignup}/> 
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.body);
});


