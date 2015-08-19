var React = require('react');
var $ = require('jquery');
var _ = require('lodash');

var BandMembers = React.createClass({
  checkForLogin: function() {
    var bandId = this.props.band.id;
    if (User.id === bandId) {
      return <button onClick={this.handleClick} className="delete">Kick from Band</button>;
    } else {
      return;
    }
  },

  render: function() {
    var band = this.props.band;
    var users = this.props.users;
    var ids = band.members;
    var _this = this;
    return (
      <div className="band-members">
        <h2>Members</h2>
        <div className="member-container">
          {ids.map(function(id) {
            var member = _.find(users, {"id": id})
            var name = member.first_name + ' ' + member.last_name;
            var url = "/#/user/" + id;
            return ([
              <div key={id} data-id={id} className="member-tile">
                <img src={member.image} alt="Member Image"/>
                <div className="text-wrapper">
                  <div className="inner-text">
                    <h4>{name}</h4>
                    <a href={url} className="btn">Profile</a>
                    {_this.checkForLogin()}
                  </div>
                </div>
              </div>
            ])
          })}
        </div>
      </div>
    );
  },

  handleClick: function(e) {
    var band = this.props.band;
    var users = this.props.users;

    var self = e.target;
    var userId = $(self).closest('.member-tile').data('id');
    
    

    var arr = _.without([1, 2, 3], 2);
    console.log(arr);


    var member = _.find(users, {"id": userId});
    member.inBand = false;


    
  }
});

module.exports = BandMembers;