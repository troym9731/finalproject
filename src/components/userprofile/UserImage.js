var React = require('react');

var UserImage = React.createClass({
  render: function() {
    return (
      <div className="user-hero">
        <img src="./images/me.jpg" alt="Profile Picture"/>
        <div className="user-name">
          <h2>Troy Mullaney</h2>
        </div>
      </div>
    );
  }
})

module.exports = UserImage;