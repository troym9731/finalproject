var React = require('react');
var UserImage = require('./UserImage');
var UserContent = require('./UserContent');

var UserInformationBox = React.createClass({
  render: function() {
    return (
      <div className="user-profile">
        <UserImage />
        <UserContent />
      </div>
    );
  }
});

module.exports = UserInformationBox;