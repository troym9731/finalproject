var React = require('react');
var Router = require('react-router');
var BandImage = require('./BandImage');
var BandMembers = require('./BandMembers');
var BandStore = require('../../stores/BandStore');
var MusicianStore = require('../../stores/MusicianStore');
var AppData = require('../../AppData');
var $ = require('jquery');
var _ = require('lodash');

var BandInformation = React.createClass({
  mixins: [ Router.State ],

  getInitialState: function() {
    var id = +this.props.bandId;
    return {
      band: BandStore.get(id),
      users: MusicianStore.getAll()
    }
  },

  componentDidMount: function() {
    BandStore.addChangeListener(this._onChange);
    MusicianStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BandStore.removeChangeListener(this._onChange);
    MusicianStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var id = +this.props.bandId;
    return (
      <div className="band-profile">
        <BandImage band={this.state.band} users={this.state.users} />
        <BandMembers joinBand={this.joinBand} leaveBand={this.leaveBand} band={this.state.band} users={this.state.users} />
      </div>
    );
  },

  _onChange: function() {
    var id = +this.props.bandId;
    this.setState({
      band: BandStore.get(id),
      users: MusicianStore.getAll()
    })
  },

  joinBand: function() {
    var band = this.state.band;

    if (Array.isArray(User.inBand)) {
      User.inBand.push(''+band.id);
    } else if (User.inBand === false) {
      User.inBand = [ ''+band.id ];
    } else {
      User.inBand = [''+User.inBand, ''+band.id];
    }

    if (Array.isArray(band.members)) {
      band.members.push(''+User.id);
    } else {
      band.members = [''+band.members, ''+User.id];
    }

    AppData.bandMembership(User, band)
  },

  leaveBand: function() {
    var band = this.state.band;

    User.inBand = _.without(User.inBand, ''+band.id);
    band.members = _.without(band.members, ''+User.id);

    if (User.inBand.length === 0) {
      User.inBand = false;
    }

    AppData.bandMembership(User, band)
  }
});

module.exports = BandInformation;