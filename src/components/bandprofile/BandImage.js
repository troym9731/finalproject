var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var $ = require('jquery');
var _ = require('lodash');

var BandImage = React.createClass({
  mixins: [ Router.State, Navigation ],

  ownerName: function() {
    var band = this.props.band;
    var owner = _.find(this.props.users, {id: band.owner})
    var ownerName = owner.first_name + ' ' + owner.last_name;
    return ownerName;
  },

  checkForLogin: function() {
    var band = this.props.band;
    var url= '/#/band/' + band.id + '/edit';
    if (User.id === band.owner) {
      return <a href={url} className="btn alternate">Edit Profile</a>
    } else if ((_.indexOf(band.members, ''+User.id) > -1)) {
      return <button onClick={this.props.leaveBand} className="btn delete">Leave Band</button>;
    } else if (+band.members.length === +band.members_needed) {
      return <button disabled className="btn disabled">Join Band</button>;
    } else if (User) {
      return <button onClick={this.props.joinBand} className="btn">Join Band</button>;
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
  }
});

module.exports = BandImage;