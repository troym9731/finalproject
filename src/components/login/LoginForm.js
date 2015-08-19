var React = require('react');
var Navigation = require('react-router').Navigation;
var $ = require('jquery');
var _ = require('lodash');

var LoginForm = React.createClass({
  mixins: [Navigation],

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
        <button onClick={this.handleClick}>Login</button>
      </form>
    );
  },

  handleClick: function(e) {
    e.preventDefault();
    var fields = $('form').serializeArray();
    var loginObj = {};
    _.forEach(fields, function(field) {
      loginObj[field.name] = field.value;
    });

    var _this = this;
    $.get('http://localhost:3000/users')
      .done(function(users) {
        User = _.find(users, loginObj);
        _this.transitionTo('/');
      })
    
  }
});

module.exports = LoginForm;