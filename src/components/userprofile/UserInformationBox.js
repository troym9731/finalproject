var React = require('react');
var UserImage = require('./UserImage');
var UserContent = require('./UserContent');
var ProfileActions = require('../../actions/ProfileActions');
var MusicianStore = require('../../stores/MusicianStore');
var _ = require('lodash');
var $ = require('jquery');

var UserInformationBox = React.createClass({
  getInitialState: function() {
    return {
      user: null
    }
  },

  componentDidMount: function() {
    var id = Number(this.props.userId);
    var _this = this;
    $.get('http://localhost:3000/users')
      .done(function(users) {
        var user = _.find(users, {"id": id});
        _this.setState({
          user: user
        })
      });
  },

  render: function() {
    var id = this.props.userId;

    if (this.state.user) {
      return (
        <div className="user-profile">
          <UserImage userId={id} user={this.state.user} />
          <UserContent userId={id} user={this.state.user} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
});

module.exports = UserInformationBox;