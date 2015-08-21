var React = require('react');
var Router = require('react-router');
var BandImage = require('./BandImage');
var BandMembers = require('./BandMembers');
var $ = require('jquery');
var _ = require('lodash');

var BandInformation = React.createClass({
  mixins: [ Router.State ],

  getInitialState: function() {
    return {
      band: null,
      users: null
    }
  },

  componentDidMount: function() {
    var id = this.props.bandId;
    var _this = this;
    $.get('http://localhost:3000/bands')
      .done(function(bands) {
        var band = _.find(bands, {id: id});
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
    var id = this.props.bandId;

    if (this.state.band && this.state.users) {
      return (
        <div className="profile-box">
          <BandImage band={this.state.band} users={this.state.users} />
          <BandMembers band={this.state.band} users={this.state.users} />
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
});

module.exports = BandInformation;