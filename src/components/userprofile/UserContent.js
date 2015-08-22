var React = require('react');

var UserContent = React.createClass({
  checkForLogin: function() {
    var editUrl = '/#/users/edit';
    if (User.id === this.props.userId) {
      return (
        <div className="button-options">
          <a href="/#/bands/create" className="btn">Start a Band</a>
          <a href={editUrl} className="btn alternate">Edit Profile</a>
        </div>
      );
    } else {
      return;
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

        </div>
        {this.checkForLogin()}
      </div>
    );
  }
});

module.exports = UserContent;