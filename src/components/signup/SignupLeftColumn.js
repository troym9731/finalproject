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
        <div className="form-object">
          <div><i className="fa fa-envelope-o"></i></div>
          <div><input type="email" name="email" id="email" placeholder="Email Address"/></div>
        </div>

      </div>
    );
  }
});

module.exports = SignupLeftColumn;