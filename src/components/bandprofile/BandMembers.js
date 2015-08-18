var React = require('react');
var _ = require('lodash');

var BandMembers = React.createClass({
  render: function() {
    var band = this.props.band;
    var users = this.props.users;
    var ids = band.members;
    return (
      <div className="band-members">
        <h2>Members</h2>
        <div className="member-container">
          {ids.map(function(id) {
            var member = _.find(users, {"id": id})
            var name = member.first_name + ' ' + member.last_name;
            var url = "/#/user/" + id;
            return ([
              <div className="member-tile">
                <img src={member.image} alt="Member Image"/>
                <div className="text-wrapper">
                  <div className="inner-text">
                    <h4>{name}</h4>
                    <a href={url} className="btn">Profile</a>
                  </div>
                </div>
              </div>
            ])
          })}
        </div>
      </div>
    );
  }
});

module.exports = BandMembers;