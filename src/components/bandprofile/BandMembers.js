var React = require('react');
var $ = require('jquery');
var _ = require('lodash');

var BandMembers = React.createClass({
  checkForOwner: function(id) {
    var band = this.props.band;
    if (+User.id === +band.owner && +User.id !== +id) {
      return <button onClick={this.kickFromBand} className="delete">Kick from Band</button>;
    } else {
      return;
    }
  },

  checkForLogin: function() {
    var band = this.props.band;
    var url= '/#/band/' + band.id + '/edit';
    if (User.id === band.owner) {
      return <div className="button-options"><a href={url} className="btn alternate">Edit Profile</a></div>;
    } else if ((_.indexOf(band.members, ''+User.id) > -1)) {
      return <div className="button-options"><button onClick={this.props.leaveBand} className="btn delete">Leave Band</button></div>;
    } else if (+band.members.length === +band.members_needed) {
      return <div className="button-options"><button disabled className="btn disabled">Join Band</button></div>;
    } else if (User) {
      return <div className="button-options"><button onClick={this.props.joinBand} className="btn">Join Band</button></div>;
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
                {_this.checkForOwner(id)}
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
              {_this.checkForOwner(ids)}
            </div>
          </div>
        </div>
      ])
    }

  },

  render: function() {
    var band = this.props.band;
    var instruments = band.instruments;

    if (Array.isArray(instruments)) {
      instruments = instruments.join(', ');
    }

    return (
      <div>
        <div className="profile-content">

            <div className="music-choices">
              <div>
                <h4><b>{instruments}</b></h4>
                <p>Instruments</p>
              </div>
              <div>
                <h4><b>{band.genre}</b></h4>
                <p>Genre</p>
              </div>
            </div>

            <div className="music-choices">
              <div>
                <h4><b>{band.members_needed}</b></h4>
                <p>Members Needed</p>
              </div>
              <div>
                <h4><b>{band.serious_level}</b></h4>
                <p>Band Goals</p>
              </div>
            </div>

          <div className="ownership">
            <h4><b>Members</b></h4>
            {this.members()}
          </div>
          {this.checkForLogin()}
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