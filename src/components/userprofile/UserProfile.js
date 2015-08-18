var React = require('react');
var UserInformationBox = require('./UserInformationBox');
var MusicianStore = require('../../stores/MusicianStore');

var UserProfile = React.createClass({
  render: function() {
    var id = Number(this.props.params.id);
    return (
      <div className="profile-box">
        <UserInformationBox userId={id} />
      </div>
    );
  }
});

module.exports = UserProfile;