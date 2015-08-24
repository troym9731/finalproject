var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var SignupHeader = require('./SignupHeader');
var SignupLeftColumn = require('./SignupLeftColumn');
var SignupRightColumn = require('./SignupRightColumn');
var TextArea = require('./TextArea');
var AppData = require('../../AppData');
var $ = require('jquery');
var _ = require('lodash');

var Signup = React.createClass({
  mixins: [ Navigation ],

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
            <button onClick={this.handleSubmit} >Submit</button>
          </form>
        </div>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var _this = this;
    var self = e.target;
    var description = $(self).closest('.signup-box').find('.profile-description').val();
    var fields = $('form').serializeArray();

    var user = {};
    _.forEach(fields, function(field) {
      user[field.name] = field.value
    });

    if (user.image === '') {
      user.image = 'http://santetotal.com/wp-content/uploads/2014/05/default-user.png';
    }

    user.instruments = [];
    for (var i = 8; i < fields.length; i++) {
      user.instruments.push(fields[i].value);
    }
    user.description = description;
    user.inBand = false;

    AppData.createUser(user, this)
  }
});

module.exports = Signup;