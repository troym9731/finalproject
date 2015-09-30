var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var BandLeftColumn = require('./BandLeftColumn');
var BandRightColumn = require('./BandRightColumn');
var Instruments = require('./Instruments');
var AppData = require('../../AppData');
var $ = require('jquery');
var _ = require('lodash');

var BandForm = React.createClass({
  mixins: [ Navigation ],

  render: function() {
    return (
      <form className="band-create">
        <div className="band-form-divider">
          <BandLeftColumn />
          <BandRightColumn />
        </div>
        <Instruments />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (!User) {
      return;
    }

    var fields = $('form').serializeArray();
    var band = {};
    _.forEach(fields, function(field) {
      band[field.name] = field.value;
    });

    if (band.image === '') {
      band.image = './images/defaultband.jpg';
    }

    if (band.address === '') {
      band.address = User.address;
    }

    if (band.zipcode === '') {
      band.zipcode = User.zipcode;
    }

    band.instruments = [];
    for (var i = 7; i < fields.length; i++) {
      band.instruments.push(fields[i].value);
    }
    
    band.members = User.id;
    band.owner = User.id;

    AppData.createBand(band, User, this);
  }
});

module.exports = BandForm;