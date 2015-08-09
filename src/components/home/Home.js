var React = require('react');
var Header = require('../Header');
var Footer = require('../Footer');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="background">
          <Header />
          <div className="banner">
            <h1>Banner</h1>
            <p>The place to meet up with local musicians to form a band or just to jam!</p>
            <a className="btn">Search Now</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Home;