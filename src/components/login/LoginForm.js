var React = require('react');

var LoginForm = React.createClass({
  render: function() {
    return (
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
    );
  }
});

module.exports = LoginForm;