var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var EditBandLeftColumn = require('./EditBandLeftColumn');
var EditBandRightColumn = require('./EditBandRightColumn');
var EditInstruments = require('./EditInstruments');
var AppData = require('../../AppData');
var $ = require('jquery');
var _ = require('lodash');

var EditBandForm = React.createClass({
  mixins: [ Navigation ],

  getInitialState: function() {
    return {
      band: null
    }
  },

  componentDidMount: function() {
    var id = this.props.bandId;
    var _this = this;
    $.get('http://localhost:3000/bands/' + id)
      .done(function(band) {
        _this.setState({
          band: band
        })
      })
  },

  checkForOwnership: function() {
    if (!User || User.id !== this.state.band.owner) {
      this.transitionTo('/');
    }
  },

  render: function() {
    if (this.state.band) {
      var band = this.state.band;
      this.checkForOwnership();
      return (
        <form className="band-create">
          <div className="band-form-divider">
            <EditBandLeftColumn band={band} />
            <EditBandRightColumn band={band} />
          </div>
          <input type="hidden" name="members" id="members" defaultValue={band.members} />
          <EditInstruments band={band} />
          <button onClick={this.handleSubmit} >Submit</button>
        </form>
      );
    } else {
      return <div>Loading...</div>
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (!User) {
      return;
    }
    var id = this.props.bandId;
    var _this = this;

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
    for (var i = 8; i < fields.length; i++) {
      band.instruments.push(fields[i].value);
    }

    band.members = band.members.split(",");
    band.owner = User.id;
    band.id = id;

    AppData.editBandProfile(band, this);
  }
});

module.exports = EditBandForm;