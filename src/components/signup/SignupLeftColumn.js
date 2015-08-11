var React = require('react');
var Address = require('../Address');

var SignupLeftColumn = React.createClass({
  render: function() {
    return (
      <div>

        <div className="form-object">
          <div><i className="fa fa-user"></i></div>
          <div><input type="text" name="first-name" id="first-name" placeholder="First Name"/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-user"></i></div>
          <div><input type="text" name="last-name" id="last-name" placeholder="Last Name"/></div>
        </div>
        <Address />

      </div>
    );
  }
});

module.exports = SignupLeftColumn;