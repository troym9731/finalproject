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
          <BandImage joinBand={this.joinBand} leaveBand={this.leaveBand} band={this.state.band} users={this.state.users} />
          <BandMembers band={this.state.band} users={this.state.users} />
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  },

  joinBand: function() {
    
    var _this = this;
    var path = this.getPath();


    var band = this.state.band;

    if (Array.isArray(User.inBand)) {
      User.inBand.push(''+band.id);
    } else if (User.inBand === false) {
      User.inBand = [ ''+band.id ];
    } else {
      User.inBand = [''+User.inBand, ''+band.id];
    }

    if (Array.isArray(band.members)) {
      band.members.push(''+User.id);
    } else {
      band.members = [''+band.members, ''+User.id];
    }

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/users/' + User.id,
      data: User
    })
    
    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/bands/' + band.id,
      data: band
    }).done(function() {
      _this.forceUpdate();
    })
    
  },

  leaveBand: function() {
    var _this = this;
    var path = this.getPath();
    var band = this.state.band;

    User.inBand = _.without(User.inBand, ''+band.id);
    band.members = _.without(band.members, ''+User.id);

    if (User.inBand.length === 0) {
      User.inBand = false;
    }

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/users/' + User.id,
      data: User
    })

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/bands/' + band.id,
      data: band
    }).done(function() {
      _this.forceUpdate();
    })
  }
});

module.exports = BandInformation;