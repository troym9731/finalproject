var React = require('react');
var LoginForm = require('./LoginForm');

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <div className="login-box">
          <h1><i className="fa fa-headphones"></i>Login</h1>
          <LoginForm />
        </div>
      </div>
    );
  }
});

module.exports = Login;