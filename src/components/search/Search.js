var React = require('react');
var SearchBox = require('./SearchBox');
var $ = require('jquery');

var Search = React.createClass({
  componentDidMount: function() {
    map = new GMaps({
      el: '#map',
      zoom: 4,
      lat: 38.9312466,
      lng: -99.6372058,
      scrollwheel: false
    });
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
    map.removeMarkers();
    var fields = $('form').serializeArray();
    var searchObj = {};
    fields.forEach(function(field) {
      searchObj[field.name] = field.value;
    });

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
        console.log(marker)
        if (marker.id === 'You') {
          google.maps.event.trigger(marker, 'click');
        }
      });
    }, 500);

    $.get('http://localhost:3000/users')
      .done(function(users) {
        users.forEach(function(user) {
          var address = user.address + user.zipcode;
          GMaps.geocode({
            address: address,
            callback: function(results, status) {
              if (status === 'OK') {
                var latlng = results[0].geometry.location;
                map.setZoom(13);
                map.addMarker({
                  lat: latlng.lat(),
                  lng: latlng.lng(),
                  animation: google.maps.Animation.DROP,
                  infoWindow: {
                    content: ''
                  }
                });
              }
            }
          });
        })
      })
  }

});

module.exports = Search;