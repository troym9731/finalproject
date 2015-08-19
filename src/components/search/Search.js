var React = require('react');
var SearchBox = require('./SearchBox');
var $ = require('jquery');
var _ = require('lodash');

function searchOptions(obj) {
  for (var prop in obj) {
    obj = _.omit(obj, obj[prop] !== '' ? '' : prop)
  }

  obj = _.omit(obj, 'address', 'zipcode');
  return obj;
}

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
          var address = user.address + ' ' + user.zipcode;
          var id = user.id;
          var genre = user.genre;
          var instruments = user.instruments.join(', ');
          var name = user.first_name + ' ' + user.last_name;
          var url = '/#/user/' + id;
          var infoWindowContent = '<h2>' + '<img src=' + user.image + '> ' + 
                                  '<a href=' + url + '>' + name + '</a></h2>' +
                                  '<h5>' + address + '</h5>' +
                                  '<h5><b>Genre:</b> ' + genre + '</h5>' +
                                  '<h5><b>Instruments:</b> ' + instruments + '</h5>';
          GMaps.geocode({
            address: address,
            callback: function(results, status) {
              if (status === 'OK') {
                var latlng = results[0].geometry.location;
                map.addMarker({
                  lat: latlng.lat(),
                  lng: latlng.lng(),
                  visible: false,
                  choice: 'musicians',
                  instruments: user.instruments,
                  id: id,
                  genre: genre,
                  infoWindow: {
                    content: infoWindowContent 
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
            var address = band.address + ' ' + band.zipcode;
            var id = band.id;
            var genre = band.genre;
            var instruments = band.instruments.join(', ');
            var url = '/#/band/' + id;
            var infoWindowContent = '<h2>' + '<img src=' + band.image + '> ' +
                                  '<a href=' + url + '>' + band.name + '</a></h2>' +
                                  '<h5>' + address + '</h5>' +
                                  '<h5><b>Genre:</b> ' + genre + '</h5>' +
                                  '<h5><b>Looking For:</b> ' + band.members_needed + ' members</h5>' +
                                  '<h5><b>Instruments Needed:</b> ' + instruments + '</h5>' +
                                  '<h5><b>Looking To:</b> ' + band.serious_level + '</h5>';
            GMaps.geocode({
              address: address,
              callback: function(results, status) {
                if (status === 'OK') {
                  var latlng = results[0].geometry.location;
                  map.addMarker({
                    lat: latlng.lat(),
                    lng: latlng.lng(),
                    visible: false,
                    choice: 'bands',
                    instruments: band.instruments,
                    id: id,
                    genre: genre,
                    infoWindow: {
                      content: infoWindowContent
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
    
    var address = searchObj.address + searchObj.zipcode; 
    
    var omitted = searchOptions(searchObj);

    if (_.isEmpty(omitted)) {
      _.forEach(map.markers, function(marker) {
        marker.setVisible(true);
      });
    } else {
      var match = [];
      if (omitted.instrument) {
        _.forEach(map.markers, function(marker) {
          if (_.includes(marker.instruments, omitted.instrument)) {
            match.push(marker);
          }
        })
        omitted = _.omit(omitted, 'instrument');
        _.forEach(_.where(match, omitted), function(marker) {
          marker.setVisible(true);
        });
      } else {
        _.forEach(_.where(map.markers, omitted), function(marker) {
          marker.setVisible(true);
        });
      }
    }

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