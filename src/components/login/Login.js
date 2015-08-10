var React = require('react');

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <div className="login-box">
          <h1><i className="fa fa-headphones"></i>Login</h1>
          <form>
            <div className="form-object">
              <div><i className="fa fa-envelope-o"></i></div>
              <div><input type="email" name="email" id="email" placeholder="Email Address"/></div>
            </div>
            <div className="form-object">
              <div><i className="fa fa-key"></i></div>
              <div><input type="password" name="password" id="password" placeholder="Password"/></div>
            </div>
            <a href="" className="btn">Login</a>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Login;