var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var _ = require('lodash');

var UserContent = React.createClass({
  mixins: [ Navigation ],

  checkForLogin: function() {
    var editUrl = '/#/users/edit';
    if (User.id === this.props.userId) {
      return (
        <div className="button-options">
          <a href="/#/bands/create" className="btn">Start a Band</a>
          <a href={editUrl} className="btn alternate">Edit Profile</a>
          <button onClick={this.logout} className="logout">Log Out</button>
        </div>
      );
    } else {
      return;
    }
  },

  bands: function() {
    var bands = this.props.bands;
    var user = this.props.user;
    var ids = user.inBand;
    var _this = this;

    if (Array.isArray(ids)) {
      var partOf = ids.map(function(id) {
        var band = _.find(bands, {id: +id});
        var name = band.name;
        var url = "/#/band/" + id;
        return ([
          <div key={id} data-id={id} className="member-tile">
            <img src={band.image} alt="Member Image"/>
            <div className="text-wrapper">
              <div className="inner-text">
                <h4>{name}</h4>
                <a href={url} className="btn">Profile</a>
              </div>
            </div>
          </div>
        ])
      })
      return partOf;
    } else {
      var band = _.find(bands, {id: +ids});
      var name = band.name;
      var url = "/#/band/" + ids;
      return ([
        <div key={ids} data-id={ids} className="member-tile">
          <img src={band.image} alt="Member Image"/>
          <div className="text-wrapper">
            <div className="inner-text">
              <h4>{name}</h4>
              <a href={url} className="btn">Profile</a>
            </div>
          </div>
        </div>
      ])
    }
  },

  render: function() {
    var user = this.props.user;
    var address = user.address + ' ' + user.zipcode;
    var instruments = user.instruments;

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
              <h4><b>{user.genre}</b></h4>
              <p>Genre</p>
            </div>
          </div>
          
          <div className="description">
            <h4><b>About Me</b></h4>
            <p>{user.description}</p>
          </div>

          <div className="ownership">
            <h4><b>Bands</b></h4>
            {this.bands()}
          </div>

        </div>
        {this.checkForLogin()}
      </div>
    );
  },

  logout: function() {
    User = false;
    this.transitionTo('/');
  }
});

module.exports = UserContent;