var React = require('react');

var UserContent = React.createClass({
  checkForLogin: function() {
    var editUrl = "/#/user/" + this.props.userId + "/edit";
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
    var instruments = user.instruments.join(', ');

    return (
      <div>
        
        <div className="profile-content">
          <div className="user-info">
            <div>
              <h4><b>Address:</b> {address}</h4>
              <h4><b>Instruments:</b> {instruments}</h4>
            </div>
            <div>
              <h4><b>Email Address:</b> {user.email}</h4>
              <h4><b>Genre:</b> {user.genre}</h4>
            </div>
          </div>

          <p>{user.description}</p>
        </div>
        {this.checkForLogin()}
      </div>
    );
  }
});

module.exports = UserContent;