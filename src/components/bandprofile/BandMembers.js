var React = require('react');
var $ = require('jquery');
var _ = require('lodash');

var BandMembers = React.createClass({
  checkForLogin: function(id) {
    var band = this.props.band;
    if (+User.id === +band.owner && +User.id !== +id) {
      return <button onClick={this.kickFromBand} className="delete">Kick from Band</button>;
    } else {
      return;
    }
  },

  members: function() {
    var band = this.props.band;
    var users = this.props.users;
    var ids = band.members;
    var _this = this;

    if (Array.isArray(ids)) {
      var members = ids.map(function(id) {
        var member = _.find(users, {id: +id});
        var name = member.first_name + ' ' + member.last_name;
        var url = "/#/user/" + id;
        return ([
          <div key={id} data-id={id} className="member-tile">
            <img src={member.image} alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>{name}</h4>
                <a href={url} className="btn">Profile</a>
                {_this.checkForLogin(id)}
              </div>
            </div>
          </div>
        ])
      })
      return members;
    } else {
      var member = _.find(users, {id: +ids});
      var name = member.first_name + ' ' + member.last_name;
      var url = "/#/user/" + ids;
      return ([
        <div key={ids} data-id={ids} className="member-tile">
          <img src={member.image} alt="Member Image"/>
          <div className="text-wrapper">
            <div className="inner-text">
              <h4>{name}</h4>
              <a href={url} className="btn">Profile</a>
              {_this.checkForLogin(ids)}
            </div>
          </div>
        </div>
      ])
    }

  },

  render: function() {
    return (
      <div className="band-members">
        <h2>Members</h2>
        <div className="member-container">
          {this.members()}
        </div>
      </div>
    );
  },

  kickFromBand: function(e) {
    var band = this.props.band;
    var users = this.props.users;
    var _this = this;

    var self = e.target;
    var userId = $(self).closest('.member-tile').data('id');
    var member = _.find(users, {id: userId});

    band.members = _.without(band.members, userId);
    member.inBand = _.without(member.inBand, ''+band.id)
    if (member.inBand.length === 0) {
      member.inBand = false;
    }

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/users/' + userId,
      data: member
    }).done(function(data) {
      $(self).closest('.member-tile').fadeOut(300);
    })

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/bands/' + band.id,
      data: band
    })
  }
});

module.exports = BandMembers;