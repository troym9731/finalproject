var React = require('react');
var GenreDropdown = require('../GenreDropdown');
var InstrumentCheckbox = require('./InstrumentCheckbox');

var SignupRightColumn = React.createClass({
  render: function() {
    return (
      <div>
        <div className="form-object">
          <div><i className="fa fa-envelope-o"></i></div>
          <div><input type="email" name="email" id="email" placeholder="Email Address"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-key"></i></div>
          <div><input type="password" name="password" id="password" placeholder="Password"/></div>
        </div>
        <GenreDropdown />
        <InstrumentCheckbox />
      </div>
    );
  }
});

module.exports = SignupRightColumn;