var React = require('react');
var SearchBox = require('./SearchBox');
var $ = require('jquery');
var _ = require('lodash');

var Search = React.createClass({
  componentDidMount: function() {
    map = new GMaps({
      el: '#map',
      zoom: 4,
      lat: 38.9312466,
      lng: -99.6372058,
      scrollwheel: false
    });

    $.get('http://localhost:3000/users')
      .done(function(users) {
        users.forEach(function(user) {
          var address = user.address + user.zipcode;
          var id = user.id;
          var genre = user.genre;
          GMaps.geocode({
            address: address,
            callback: function(results, status) {
              if (status === 'OK') {
                var latlng = results[0].geometry.location;
                map.addMarker({
                  lat: latlng.lat(),
                  lng: latlng.lng(),
                  visible: false,
                  musician: true,
                  id: id,
                  genre: genre,
                  infoWindow: {
                    content: '<p>user' + id + ' ' + genre + '</p>' 
                  }
                });
              }
            }
          });
        })
      })

       $.get('http://localhost:3000/bands')
        .done(function(bands) {
          bands.forEach(function(band) {
            var address = band.address + band.zipcode;
            var id = band.id;
            var genre = band.genre;
            GMaps.geocode({
              address: address,
              callback: function(results, status) {
                if (status === 'OK') {
                  var latlng = results[0].geometry.location;
                  map.addMarker({
                    lat: latlng.lat(),
                    lng: latlng.lng(),
                    visible: false,
                    band: true,
                    id: id,
                    genre: genre,
                    infoWindow: {
                      content: '<p>band' + id + ' ' + genre + '</p>' 
                    }
                  });
                }
              }
            });
          })
        })
  },

  render: function() {
    return (
      <div>
        <div id="map"></div>
        <div className="search">
          <SearchBox onClick={this.handleClick}/>
        </div>
      </div>
    );
  },

  handleClick: function(e) {
    e.preventDefault();
    _.forEach(map.markers, function(marker) {
      marker.setVisible(false);
    });
    var fields = $('form').serializeArray();
    var searchObj = {};
    _.forEach(fields, function(field) {
      searchObj[field.name] = field.value;
    });
     
    var choice = searchObj.choice;
    var genre = searchObj.genre;

    if (genre === '') {
      if (choice === '') {
        _.forEach(map.markers, function(marker) {
          marker.setVisible(true);
        });
      } else if (choice === 'bands') {
        _.forEach(_.where(map.markers, {band: true}), function(marker) {
          marker.setVisible(true);
        });
      } else if (choice === 'musicians') {
        _.forEach(_.where(map.markers, {musician: true}), function(marker) {
          marker.setVisible(true);
        });
      }
    } else {
      if (choice === '') {
        _.forEach(_.where(map.markers, {genre: genre}), function(marker) {
          marker.setVisible(true);
        });
      } else if (choice === 'bands') {
        _.forEach(_.where(map.markers, {band: true, genre: genre}), function(marker) {
          marker.setVisible(true);
        });
      } else if (choice === 'musicians') {
        _.forEach(_.where(map.markers, {musician: true, genre: genre}), function(marker) {
          marker.setVisible(true);
        });
      }
    }

    var address = searchObj.address + searchObj.zipcode;

    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        if (status === 'OK') {
          var latlng = results[0].geometry.location;
          map.setCenter(latlng.lat(), latlng.lng());
          map.setZoom(14);
          map.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            id: 'You',
            infoWindow: {
              content: '<p>You</p>'
            }
          });
        }
      }
    });
    
    setTimeout(function() {
      _.forEach(_.where(map.markers, {id: 'You'}), function(marker) {
        google.maps.event.trigger(marker, 'click');
      });
    }, 500);
  }
});

module.exports = Search;