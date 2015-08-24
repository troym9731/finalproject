var ProfileActions = require('./actions/ProfileActions');
var $ = require('jquery');

module.exports = {

  createUser: function(user, component) {
    $.ajax({
      traditional: true,
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: user
    }).done(function(newUser) {
      User = newUser;
      ProfileActions.createUser(newUser, component);
    })

  },

  createBand: function() {

  },

  joinLeaveBand: function(User, band) {
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