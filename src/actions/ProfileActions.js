var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
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
      type: ActionTypes.LOAD_BANDS,
      data: bands
    });
  }

};