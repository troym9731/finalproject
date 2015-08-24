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

  createBand: function(band) {

  },

  joinBand: function(User, band) {
    AppData.joinLeaveBand(User, band)
    AppDispatcher.dispatch({
      type: AppConstants.JOIN_BAND,
      user: User,
      band: band
    })
  },

  leaveBand: function(User, band) {
    AppData.joinLeaveBand(User, band)
    AppDispatcher.dispatch({
      type: AppConstants.LEAVE_BAND,
      user: User,
      band: band
    })
  }

};