var React = require('react');
var BandImage = require('./BandImage');
var BandMembers = require('./BandMembers');
var $ = require('jquery');
var _ = require('lodash');

var BandProfile = React.createClass({
  getInitialState: function() {
    return {
      band: null,
      users: null
    }
  },

  componentDidMount: function() {
    var id = Number(this.props.params.id);
    var _this = this;
    $.get('http://localhost:3000/bands')
      .done(function(bands) {
        var band = _.find(bands, {"id": id});
        _this.setState({
          band: band
        })
      });

    $.get('http://localhost:3000/users')
      .done(function(users) {
        _this.setState({
          users: users
        })
      });
  },

  render: function() {
    var id = Number(this.props.params.id);

    if (this.state.band && this.state.users) {
      return (
        <div className="background-help">
          <div className="profile-box">
            <BandImage userId={id} band={this.state.band} users={this.state.users} />
            <BandMembers userId={id} band={this.state.band} users={this.state.users} />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
});

module.exports = BandProfile;