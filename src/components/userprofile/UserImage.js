var React = require('react');

var UserImage = React.createClass({
  render: function() {
    return (
      <div className="user-image">
        <img src="./images/me.jpg" alt="Profile Picture"/>
        <a href="/band/create" className="btn">Start a Band</a>
        <a href="/user/:id/edit" className="btn">Edit Profile</a>
      </div>
    );
  }
})

module.exports = UserImage;