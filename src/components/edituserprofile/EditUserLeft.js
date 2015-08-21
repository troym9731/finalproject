var React = require('react');
var Address = require('../Address');

var EditUserLeft = React.createClass({
  render: function() {
    return (
      <div>

        <div className="form-object">
          <div><i className="fa fa-user"></i></div>
          <div><input type="text" name="first_name" id="first_name" placeholder="First Name" defaultValue={User.first_name}/></div>
        </div>
        <div className="form-object">
          <div><i className="fa fa-user"></i></div>
          <div><input type="text" name="last_name" id="last_name" placeholder="Last Name" defaultValue={User.last_name}/></div>
        </div>
        <Address />
        <div className="form-object">
          <div><i className="fa fa-envelope-o"></i></div>
          <div><input type="email" name="email" id="email" placeholder="Email Address" defaultValue={User.email}/></div>
        </div>

      </div>
    );
  }
});

module.exports = EditUserLeft;