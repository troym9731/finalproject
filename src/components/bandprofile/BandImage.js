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

  render: function() {
    var band = this.props.band;
    var instruments = band.instruments;
    var address = band.address + ' ' + band.zipcode;

    if (Array.isArray(instruments)) {
      instruments = instruments.join(', ');
    }

    var ownerName = this.ownerName();
    
    return (
      <div className="hero-container">
        <div>
          <img className="profile-picture" src={band.image} alt="Band Profile Picture"/>
        </div>
        <div className="band-name">
          <h2>{band.name}</h2>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-map-marker"></i>
            <h4>{address}</h4>
          </div>
          <div className="contact-item">
            <i className="fa fa-user"></i>
            <h4><b>Founder:</b> {ownerName}</h4>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BandImage;