var React = require('react');
var MusicianStore = require('../../stores/MusicianStore');
var ProfileActions = require('../../actions/ProfileActions');

var UserImage = React.createClass({
  render: function() {
    var user = this.props.user;
    var address = user.address + ' ' + user.zipcode;
    var first_name = user.first_name;
    var last_name = user.last_name;
    var name = first_name + ' ' + last_name;
    return (
      <div className="hero-container">
        <div>
          <img className="profile-picture" src={this.props.user.image} alt="Profile Picture"/>
        </div>
        <div className="user-name">
          <h2>{name}</h2>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-map-marker"></i>
            <h4>{address}</h4>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <h4>{user.email}</h4>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserImage;