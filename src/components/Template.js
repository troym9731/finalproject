var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Navigation = require('react-router').Navigation;
var Header = require('./Header');
var Footer = require('./Footer');
var $ = require('jquery');

var Template = React.createClass({
  mixins: [Router.State, Navigation],

  changeBackground: function() {
    var path = this.getPath();
    if (path === '/' || path === '/login' || path === '/signup') {
      return true;
    } else {
      return false;
    }
  },

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
    var lightbox = this.lightbox() ? 'background lightbox' : 'background wallpaper';
    var bgImage = this.changeBackground() ? lightbox : 'background';

    return (
      <div>
        <div className={bgImage}>
          <Header search={path} />
          <RouteHandler />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Template;