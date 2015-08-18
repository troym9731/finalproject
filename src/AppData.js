var ProfileActions = require('./actions/ProfileActions');
var $ = require('jquery');

module.exports = {
  loadData: function() {
    $.get('http://localhost:3000/users')
      .done(function(users) {
        ProfileActions.loadUsers(users);
      })

    $.get('http://localhost:3000/bands')
      .done(function(bands) {
        ProfileActions.loadBands(bands)
      })
  }
}