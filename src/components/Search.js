var React = require('react');
var GenreDropdown = require('./GenreDropdown');

var ZipCode = React.createClass({
  render: function() {
    return (
      <div className="form-object">
        <div><i className="fa fa-map"></i></div>
        <div><input type="text" name="zipcode" id="zipcode" placeholder="Zip Code"/></div>
      </div>
    );
  }
})

var MapChoices = React.createClass({
  render: function() {
    return (
      <div className="map-choices">
        <input type="radio" name="choice" value="bands" id="bands"/>
        <label htmlFor="bands"> Bands</label>
        <input type="radio" name="choice" value="musicians" id="musicians"/>
        <label htmlFor="musicians"> Musicians</label>
      </div>
    );
  }
});

var SearchBox = React.createClass({
  render: function() {
    return (
      <div className="search-box">
        <h2>What are you looking for?</h2>
        <form>
          <MapChoices />
          <ZipCode />
          <GenreDropdown />
          <a href="" className="btn"><i className="fa fa-search"></i></a>
        </form>
      </div>
    );
  }
});

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