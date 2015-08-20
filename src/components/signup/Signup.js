var React = require('react');
var SignupHeader = require('./SignupHeader');
var SignupLeftColumn = require('./SignupLeftColumn');
var SignupRightColumn = require('./SignupRightColumn');
var TextArea = require('./TextArea');
var $ = require('jquery');
var _ = require('lodash');

var Signup = React.createClass({
  render: function() {
    return (
      <div>
        <div className="signup-box">
          <SignupHeader />
          <form>
            <div className="form-divider">
              <SignupLeftColumn />
              <SignupRightColumn />
            </div>
            <TextArea />
            <button onClick={this.handleClick} >Submit</button>
          </form>
        </div>
      </div>
    );
  },

  handleClick: function(e) {
    e.preventDefault();
    var self = e.target;
    var description = $(self).closest('.signup-box').find('.profile-description').val();
    var fields = $('form').serializeArray();

    var user = {};
    _.forEach(fields, function(field) {
      user[field.name] = field.value
    });

    user.instruments = [];
    for (var i = 7; i < fields.length; i++) {
      user.instruments.push(fields[i].value);
    }
    user.description = description;
    user.inBand = false;

    $.ajax({
      traditional: true,
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: user
    }).done(function(data) {
      console.log(data);
    })
  }
});

module.exports = Signup;