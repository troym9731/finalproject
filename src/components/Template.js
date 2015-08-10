var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Header = require('./Header');
var Footer = require('./Footer');

var Template = React.createClass({
  mixins: [Router.State],

  lightbox: function() {
    var path = this.getPath();
    if (path === '/login' || path === '/signup') {
      return true;
    } else {
      return false;
    }
  },

  render: function() {
    var path = this.getPath();
    var bgCheck = this.lightbox() ? 'background lightbox' : 'background';
    return (
      <div>
        <div className={bgCheck}>
          <Header search={path} />
          <RouteHandler />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Template;