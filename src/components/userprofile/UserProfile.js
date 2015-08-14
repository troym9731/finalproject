var React = require('react');
var UserInformationBox = require('./UserInformationBox');

var UserProfile = React.createClass({
  render: function() {
    return (
      <div className="background-help">
        <div className="profile-box">
          <UserInformationBox />
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;