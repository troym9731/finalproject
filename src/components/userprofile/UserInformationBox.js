var React = require('react');
var UserImage = require('./UserImage');
var UserContent = require('./UserContent');
var ProfileActions = require('../../actions/ProfileActions');
var MusicianStore = require('../../stores/MusicianStore');

var UserInformationBox = React.createClass({
  render: function() {
    var id = this.props.userId;
    return (
      <div className="user-profile">
        <UserImage userId={id} />
        <UserContent userId={id} />
      </div>
    );
  }
});

module.exports = UserInformationBox;