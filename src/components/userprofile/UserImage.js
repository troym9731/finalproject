var React = require('react');
var MusicianStore = require('../../stores/MusicianStore');
var ProfileActions = require('../../actions/ProfileActions');

var UserImage = React.createClass({
  render: function() {
    var first_name = this.props.user.first_name;
    var last_name = this.props.user.last_name;
    var name = first_name + ' ' + last_name;
    return (
      <div className="user-hero">
        <img src={this.props.user.image} alt="Profile Picture"/>
        <div className="user-name">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
})

module.exports = UserImage;