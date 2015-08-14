var React = require('react');

var UserProfile = React.createClass({
  render: function() {
    return (
      <div>
        <div className="box">
          <div className="user-profile">
            <div><img src="" alt="Profile Picture"/></div>
            <div>Content</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;