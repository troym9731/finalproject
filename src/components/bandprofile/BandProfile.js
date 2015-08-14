var React = require('react');
var BandImage = require('./BandImage');
var BandMembers = require('./BandMembers');

var BandProfile = React.createClass({
  render: function() {
    return (
      <div className="background-help">
        <div className="profile-box">
          <BandImage />
          <BandMembers />
        </div>
      </div>
    );
  }
});

module.exports = BandProfile;