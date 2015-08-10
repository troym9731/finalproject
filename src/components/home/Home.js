var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="banner">
          <h1>BandJam</h1>
          <p>The place to meet up with local musicians to form a band or just to jam!</p>
          <a className="btn">Search Now</a>
        </div>
      </div>
    );
  }
});

module.exports = Home;