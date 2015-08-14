var React = require('react');

var BandImage = React.createClass({
  render: function() {
    return (
      <div className="band-profile">
        <img src="./images/defaultband.jpg" alt="Band Profile Image"/>
        <h2>AC/DC</h2>
        <h4>Band Founder: Troy Mullaney</h4>
        <h4>Genre: Rock</h4>
        <h4>Looking for: 4 members</h4>
      </div>
    );
  }
});

module.exports = BandImage;