var React = require('react');
var _ = require('lodash');

var BandImage = React.createClass({
  ownerName: function() {
    var band = this.props.band;
    var owner = _.find(this.props.users, {"id": band.owner})
    var ownerName = owner.first_name + ' ' + owner.last_name;
    return ownerName;
  },

  checkForLogin: function() {
    if (User.id === this.props.band.owner) {
      return <a href="" className="btn alternate">Edit Profile</a>
    } else {
      return <a href="" className="btn">Join Band</a>;
    }
  },

  render: function() {
    var band = this.props.band;
    var instruments = band.instruments.join(', ');
    var ownerName = this.ownerName();
    band.image = band.image ? band.image : "./images/defaultband.jpg";
    
    return (
      <div className="band-profile">
        <img src={band.image} alt="Band Profile Image"/>
        <h2>{band.name}</h2>
        <h4><b>Band Founder:</b> {ownerName}</h4>
        <h4><b>Genre:</b> {band.genre}</h4>
        <h4><b>Looking for:</b> {band.members_needed} members</h4>
        <h4><b>Looking To:</b> {band.serious_level}</h4>
        <h4><b>Instruments Needed:</b> {instruments}</h4>
        {this.checkForLogin()}
      </div>
    );
  }
});

module.exports = BandImage;