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
                    content: '<p>user' + id + '</p>' 
                                + '<p>' + genre '</p>'
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
                      content: '<p>band' + id + '</p>' 
                                + '<p>' + genre '</p>'
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
    var fields = $('form').serializeArray();
    var searchObj = {};
    fields.forEach(function(field) {
      searchObj[field.name] = field.value;
    });

    if (searchObj.choice === '') {
      map.markers.forEach(function(marker) {
        marker.setVisible(true);
      });
    } else if (searchObj.choice === 'bands') {
      map.markers.forEach(function(marker) {
        if (marker.band) {
          marker.setVisible(true);
        } else {
          marker.setVisible(false);
        }
      });
    } else if (searchObj.choice === 'musicians') {
      map.markers.forEach(function(marker) {
        if (marker.musician) {
          marker.setVisible(true);
        } else {
          marker.setVisible(false);
        }
      });
    }

    var address = searchObj['address'] + searchObj['zipcode'];

    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        if (status === 'OK') {
          var latlng = results[0].geometry.location;
          map.setCenter(latlng.lat(), latlng.lng());
          map.setZoom(13);
          map.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            animation: google.maps.Animation.DROP,
            id: 'You',
            infoWindow: {
              content: '<p>You</p>'
            }
          });
        }
      }
    });
    
    setTimeout(function() {
      map.markers.forEach(function(marker) {
        if (marker.id === 'You') {
          google.maps.event.trigger(marker, 'click');
        }
      });
    }, 500);
  }
});

module.exports = Search;