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
  },

  joinBand: function(User, band) {
    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/users/' + User.id,
      data: User
    })
    
    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/bands/' + band.id,
      data: band
    })
  }
}