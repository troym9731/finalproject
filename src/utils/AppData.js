var ProfileActions = require('../actions/ProfileActions');
var $ = require('jquery');

module.exports = {
  getUsers: function() {
    $.get('http://localhost:3000/users')
      .done(function(users) {
        ProfileActions.loadUsers(users);
      })
  },

  getBands: function() {
    return;
  }
}