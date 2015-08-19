var React = require('react');
var Router = require('react-router');
var UserInformationBox = require('./UserInformationBox');
var MusicianStore = require('../../stores/MusicianStore');

var UserProfile = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var id = Number(this.props.params.id);
    return (
      <div className="profile-box">
        <UserInformationBox key={id} userId={id} />
      </div>
    );
  }
});

module.exports = UserProfile;