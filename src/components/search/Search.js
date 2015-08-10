var React = require('react');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <div id="map"></div>
        <div className="search">
        </div>
      </div>
    );
  }
});

module.exports = Search;