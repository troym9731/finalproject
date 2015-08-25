var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var AppData = require('../AppData');
var $ = require('jquery');

module.exports = {

  loadUsers: function(users) {
    AppDispatcher.dispatch({
      type: AppConstants.LOAD_USERS,
      data: users
    });
  },

  loadBands: function(bands) {
    AppDispatcher.dispatch({
      type: AppConstants.LOAD_BANDS,
      data: bands
    });
  },

  createUser: function(user, component) {
    AppDispatcher.dispatch({
      type: AppConstants.CREATE_USER,
      data: user,
      caller: component
    })
  },

  createBand: function(band, user, component) {
    AppDispatcher.dispatch({
      type: AppConstants.CREATE_BAND,
      band: band,
      user: user,
      caller: component
    })
  },

  bandMembership: function(User, band) {
    AppDispatcher.dispatch({
      type: AppConstants.BAND_MEMBERSHIP,
      user: User,
      band: band
    })
  },

  kickFromBand: function(band, member) {
    AppDispatcher.dispatch({
      type: AppConstants.KICK_FROM_BAND,
      band: band,
      member: member
    })
  }
};

