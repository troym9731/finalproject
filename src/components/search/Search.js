var React = require('react');
var SearchBox = require('./SearchBox');

var Search = React.createClass({
  componentDidMount: function() {
    map = new GMaps({
      el: '#map',
      zoom: 16,
      lat: -12.043333,
      lng: -77.028333,
      click: function(e) {
        alert('click');
      },
      dragend: function(e) {
        alert('dragend');
      }
    });
  },

  render: function() {
    return (
      <div>
        <div id="map"></div>
        <div className="search">
          <SearchBox />
        </div>
      </div>
    );
  }
});

module.exports = Search;