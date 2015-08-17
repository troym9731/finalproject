var React = require('react');
var MusicianStore = require('../../stores/MusicianStore');
var ProfileActions = require('../../actions/ProfileActions');

function getUser(id) {
  var user = MusicianStore.get(id);
  console.log(user);
  return user;
}

var UserImage = React.createClass({
  getInitialState: function() {
    
    return {};
  },

  render: function() {
    return (
      <div className="user-hero">
        <img src="./images/me.jpg" alt="Profile Picture"/>
        <div className="user-name">
          <h2>{this.state.name}</h2>
        </div>
      </div>
    );
  }
})

module.exports = UserImage;