var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var EditUserHeader = require('./EditUserHeader');
var EditUserLeft = require('./EditUserLeft');
var EditUserRight = require('./EditUserRight');
var EditTextArea = require('./EditTextArea');
var AppData = require('../../AppData');
var $ = require('jquery');
var _ = require('lodash');

var EditUserProfile = React.createClass({
  mixins: [ Router.State, Navigation ],

  render: function() {
    return (
      <div>
        <div className="signup-box">
          <EditUserHeader />
          <form>
            <div className="form-divider">
              <EditUserLeft />
              <EditUserRight />
            </div>
            <EditTextArea />
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
    user.id = User.id;

    AppData.editUserProfile(user, this);

    // $.ajax({
    //   traditional: true,
    //   url: 'http://localhost:3000/users/' + User.id,
    //   method: 'PUT',
    //   data: user
    // }).done(function(data) {
    //   User = data;
    //   var url = '/user/' + data.id;
    //   _this.transitionTo(url)
    // })
  }
});

module.exports = EditUserProfile;