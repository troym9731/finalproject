var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var $ = require('jquery');
var _ = require('lodash');

var BandImage = React.createClass({
  mixins: [ Router.State, Navigation ],

  ownerName: function() {
    var band = this.props.band;
    console.log(band)
    var owner = _.find(this.props.users, {"id": band.owner})
    console.log(owner)
    var ownerName = owner.first_name + ' ' + owner.last_name;
    return ownerName;
  },

  checkForLogin: function() {
    var band = this.props.band;
    if (User.id === band.owner) {
      return <a href="" className="btn alternate">Edit Profile</a>
    } else if ((_.indexOf(band.members, ''+User.id) > -1)) {
      return <a href="#" onClick={this.leaveBand} className="btn delete">Leave Band</a>;
    } else if (User) {
      return <a href="#" onClick={this.joinBand} className="btn">Join Band</a>;
    }
  },

  render: function() {
    var band = this.props.band;
    var instruments = band.instruments;
    var address = band.address + ' ' + band.zipcode;

    if (Array.isArray(instruments)) {
      instruments = instruments.join(', ');
    }

    var ownerName = this.ownerName();
    
    return (
      <div className="band-profile">
        <img src={band.image} alt="Band Profile Image"/>
        <h2>{band.name}</h2>
        <div className="info">
          <h4><b>Band Founder:</b> {ownerName}</h4>
          <h4><b>Address:</b> {address}</h4>
          <h4><b>Genre:</b> {band.genre}</h4>
          <h4><b>Looking for:</b> {band.members_needed} members</h4>
          <h4><b>Looking To:</b> {band.serious_level}</h4>
          <h4><b>Instruments Needed:</b> {instruments}</h4>
        </div>
        {this.checkForLogin()}
      </div>
    );
  },

  joinBand: function() {
    var _this = this;
    var path = this.getPath();
    if (!User) {
      return;
    }

    var band = this.props.band;

    if (Array.isArray(User.inBand)) {
      User.inBand.push(''+band.id);
    } else {
      User.inBand = [''+User.inBand, ''+band.id];
    }

    if (Array.isArray(band.members)) {
      band.members.push(''+User.id);
    } else {
      band.members = [''+band.members, ''+User.id];
    }

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/users/' + User.id,
      data: User
    })

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/bands/' + band.id,
      data: band
    }).done(function() {
      _this.transitionTo(path);
    })
    
  },

  leaveBand: function() {
    var _this = this;
    var path = this.getPath();
    var band = this.props.band;

    User.inBand = _.without(User.inBand, ''+band.id);
    band.members = _.without(band.members, ''+User.id);

    if (User.inBand.length === 0) {
      User.inBand = false;
    }

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/users/' + User.id,
      data: User
    })

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/bands/' + band.id,
      data: band
    }).done(function() {
      _this.transitionTo(path);
    })
  }
});

module.exports = BandImage;