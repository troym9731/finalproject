var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function() {
    return (
      <header className="primary-header">
        <i className="fa fa-music"></i>
        <button>Sign Up</button>
        <button>Login</button>
      </header>
    );
  }
});

React.render(
  <Header />,
  document.getElementById('app')
);