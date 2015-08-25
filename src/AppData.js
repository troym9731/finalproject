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

  createBand: function(band, User, component) {
    $.ajax({
      traditional: true,
      url: 'http://localhost:3000/bands',
      method: 'POST',
      data: band
    }).done(function(newBand) {
      if (User.inBand === false) {
        User.inBand = newBand.id;
      } else if (Array.isArray(User.inBand)) {
        User.inBand = User.inBand.push(newBand.id);
      } else {
        User.inBand = [User.inBand, newBand.id];
      }
      $.ajax({
        traditional: true,
        url: 'http://localhost:3000/users/' + User.id,
        method: 'PUT',
        data: User
      }).done(function(user) {
        ProfileActions.createBand(newBand, user, component);
      })
    })
  },

  bandMembership: function(User, band) {
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
    }).done(function() {
      ProfileActions.bandMembership(User, band);
    })
  },

  kickFromBand: function(band, member) {
    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/users/' + member.id,
      data: member
    })

    $.ajax({
      traditional: true,
      method: 'PUT',
      url: 'http://localhost:3000/bands/' + band.id,
      data: band
    }).done(function() {
      ProfileActions.kickFromBand(band, member);
    })
  }
};;