var React = require('react');

var BandImage = React.createClass({
  render: function() {
    return (
      <div className="band-profile">
        <img src="./images/defaultband.jpg" alt="Band Profile Image"/>
        <h2>AC/DC</h2>
        <h4><b>Band Founder:</b> Troy Mullaney</h4>
        <h4><b>Genre:</b> Rock</h4>
        <h4><b>Looking for:</b> 4 members</h4>
        <a href="" className="btn">Join Band</a>
      </div>
    );
  }
});

module.exports = BandImage;