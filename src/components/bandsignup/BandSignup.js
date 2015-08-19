var React = require('react');
var BandForm = require('./BandForm');

var BandSignup = React.createClass({
  render: function() {
    return (
      <div className="band-form-bg">
        <div className="signup-box band-form">
          <h1><i className="fa fa-headphones"></i>Create a Band</h1>
          <BandForm />
        </div>
       </div>
    );
  }
});

module.exports = BandSignup;