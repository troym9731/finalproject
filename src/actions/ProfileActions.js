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

  receiveCreatedMessage: function(createdMessage) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_CREATED_MESSAGE,
      data: createdMessage
    });
  }

};