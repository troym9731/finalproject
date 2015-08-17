var React = require('react');
var UserInformationBox = require('./UserInformationBox');

var UserProfile = React.createClass({
  render: function() {
    return (
      <div className="profile-box">
        <UserInformationBox />
      </div>
    );
  }
});

module.exports = UserProfile;